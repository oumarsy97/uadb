// email.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as sgMail from '@sendgrid/mail';

export interface EmailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
  cc?: string | string[];
  bcc?: string | string[];
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType?: string;
  }>;
}

export interface EmailTemplate {
  template: string;
  variables: Record<string, any>;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;
  private emailProvider: 'smtp' | 'sendgrid' | 'gmail';

  constructor(private configService: ConfigService) {
    this.emailProvider = this.configService.get<string>('EMAIL_PROVIDER', 'smtp') as any;
    this.initializeEmailProvider();
  }

  private initializeEmailProvider() {
    switch (this.emailProvider) {
      case 'sendgrid':
        this.initializeSendGrid();
        break;
      case 'gmail':
        this.initializeGmail();
        break;
      case 'smtp':
      default:
        this.initializeSMTP();
        break;
    }
  }

  private initializeSendGrid() {
    const apiKey = this.configService.get<string>('SENDGRID_API_KEY');
    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY is required for SendGrid provider');
    }
    sgMail.setApiKey(apiKey);
    this.logger.log('SendGrid initialized');
  }

 // Ajoutez ces logs dans votre méthode initializeGmail()
private initializeGmail() {
  const gmailUser = this.configService.get<string>('GMAIL_USER');
  const gmailPass = this.configService.get<string>('GMAIL_APP_PASSWORD');
  
  // Logs de débogage (à retirer en production)
  this.logger.log(`Gmail User: ${gmailUser ? 'Configuré' : 'MANQUANT'}`);
  this.logger.log(`Gmail Pass: ${gmailPass ? 'Configuré' : 'MANQUANT'}`);
  
  if (!gmailUser || !gmailPass) {
    throw new Error('GMAIL_USER et GMAIL_APP_PASSWORD sont obligatoires pour Gmail');
  }

  this.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });
  this.logger.log('Gmail SMTP initialized');
}

 private initializeSMTP() {
  const smtpUser = this.configService.get<string>('SMTP_USER');
  const smtpPass = this.configService.get<string>('SMTP_PASS');
  const smtpHost = this.configService.get<string>('SMTP_HOST', 'localhost');
  const smtpPort = this.configService.get<number>('SMTP_PORT', 587);
  
  // Logs pour débogage
  this.logger.log(`SMTP Config - Host: ${smtpHost}, Port: ${smtpPort}`);
  this.logger.log(`SMTP User: ${smtpUser ? 'Configuré' : 'MANQUANT'}`);
  
  const config: any = {
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true pour 465, false pour autres ports
    requireTLS: smtpPort === 587, // Force TLS pour le port 587
    tls: {
      rejectUnauthorized: false, // Accepter les certificats auto-signés
      ciphers: 'SSLv3', // Compatibilité SSL
    },
  };

  // N'ajoutez l'auth que si les credentials sont présents
  if (smtpUser && smtpPass) {
    config.auth = {
      user: smtpUser,
      pass: smtpPass,
    };
  }

  this.transporter = nodemailer.createTransport(config);
  this.logger.log(`SMTP initialized - Auth: ${smtpUser ? 'Enabled' : 'Disabled'}`);
}

  async sendEmail(options: EmailOptions): Promise<boolean> {
    try {
      const defaultFrom = this.configService.get<string>('DEFAULT_FROM_EMAIL', 'noreply@example.com');
      
      if (this.emailProvider === 'sendgrid') {
        return await this.sendWithSendGrid(options, defaultFrom);
      } else {
        return await this.sendWithNodemailer(options, defaultFrom);
      }
    } catch (error) {
      this.logger.error('Failed to send email', error);
      throw new Error(`Email sending failed: ${error.message}`);
    }
  }

  private async sendWithSendGrid(options: EmailOptions, defaultFrom: string): Promise<boolean> {
    const msg: sgMail.MailDataRequired = {
      to: Array.isArray(options.to) ? options.to : [options.to],
      from: options.from || defaultFrom,
      subject: options.subject,
      cc: options.cc ? (Array.isArray(options.cc) ? options.cc : [options.cc]) : undefined,
      bcc: options.bcc ? (Array.isArray(options.bcc) ? options.bcc : [options.bcc]) : undefined,
      attachments: options.attachments?.map(att => ({
        filename: att.filename,
        content: Buffer.isBuffer(att.content) ? att.content.toString('base64') : att.content,
        type: att.contentType,
        disposition: 'attachment',
      })),
      content: options.html
        ? [
            {
              type: 'text/html',
              value: options.html,
            },
            ...(options.text
              ? [
                  {
                    type: 'text/plain',
                    value: options.text,
                  },
                ]
              : []),
          ]
        : [
            {
              type: 'text/plain',
              value: options.text || '',
            },
          ],
    };

    await sgMail.send(msg);
    this.logger.log(`Email sent successfully via SendGrid to ${options.to}`);
    return true;
  }

  private async sendWithNodemailer(options: EmailOptions, defaultFrom: string): Promise<boolean> {
    const mailOptions = {
      from: options.from || defaultFrom,
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      cc: options.cc ? (Array.isArray(options.cc) ? options.cc.join(', ') : options.cc) : undefined,
      bcc: options.bcc ? (Array.isArray(options.bcc) ? options.bcc.join(', ') : options.bcc) : undefined,
      subject: options.subject,
      text: options.text,
      html: options.html,
      attachments: options.attachments,
    };

    const result = await this.transporter.sendMail(mailOptions);
    this.logger.log(`Email sent successfully via ${this.emailProvider} to ${options.to}`, result.messageId);
    return true;
  }

  async sendWelcomeEmail(to: string, userName: string): Promise<boolean> {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Bienvenue ${userName}!</h1>
        <p>Nous sommes ravis de vous accueillir dans notre plateforme.</p>
        <p>Votre compte a été créé avec succès.</p>
        <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
          <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
        </div>
        <p>Cordialement,<br>L'équipe</p>
      </div>
    `;

    return this.sendEmail({
      to,
      subject: 'Bienvenue sur notre plateforme!',
      html,
      text: `Bienvenue ${userName}! Nous sommes ravis de vous accueillir.`,
    });
  }

  async sendPasswordResetEmail(to: string, resetToken: string, userName: string): Promise<boolean> {
    const resetUrl = `${this.configService.get('FRONTEND_URL')}/reset-password?token=${resetToken}`;
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Réinitialisation de mot de passe</h1>
        <p>Bonjour ${userName},</p>
        <p>Vous avez demandé une réinitialisation de votre mot de passe.</p>
        <div style="margin: 20px 0;">
          <a href="${resetUrl}" 
             style="background-color: #007bff; color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 5px; display: inline-block;">
            Réinitialiser mon mot de passe
          </a>
        </div>
        <p style="color: #666; font-size: 14px;">
          Ce lien expire dans 1 heure. Si vous n'avez pas demandé cette réinitialisation, 
          ignorez cet email.
        </p>
        <p>Cordialement,<br>L'équipe</p>
      </div>
    `;

    return this.sendEmail({
      to,
      subject: 'Réinitialisation de votre mot de passe',
      html,
      text: `Réinitialisation de mot de passe. Cliquez sur ce lien: ${resetUrl}`,
    });
  }

  async sendNotificationEmail(to: string | string[], title: string, message: string): Promise<boolean> {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">${title}</h1>
        <div style="margin: 20px 0; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #007bff;">
          <p>${message}</p>
        </div>
        <p>Cordialement,<br>L'équipe</p>
      </div>
    `;

    return this.sendEmail({
      to,
      subject: title,
      html,
      text: `${title}\n\n${message}`,
    });
  }

  async sendBulkEmails(emails: EmailOptions[]): Promise<{ success: number; failed: number; errors: string[] }> {
    const results: { success: number; failed: number; errors: string[] } = { success: 0, failed: 0, errors: [] };

    for (const email of emails) {
      try {
        await this.sendEmail(email);
        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push(`Failed to send to ${email.to}: ${error.message}`);
      }
    }

    this.logger.log(`Bulk email results: ${results.success} success, ${results.failed} failed`);
    return results;
  }

  async verifyConnection(): Promise<boolean> {
    try {
      if (this.emailProvider === 'sendgrid') {
        // Pour SendGrid, on ne peut pas vraiment tester la connexion
        // On vérifie juste que l'API key est configurée
        return !!this.configService.get<string>('SENDGRID_API_KEY');
      } else {
        await this.transporter.verify();
        return true;
      }
    } catch (error) {
      this.logger.error('Email connection verification failed', error);
      return false;
    }
  }

  async sendJokkoChainWelcomeEmail(
  to: string, 
  userName: string, 
  userEmail: string, 
  temporaryPassword: string
): Promise<boolean> {
  const loginUrl = 'http://localhost:3000/login';
  
  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bienvenue sur Jokko-Chain</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          position: relative;
        }
        
        .header {
          background: linear-gradient(135deg, #00695c 0%, #439889 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="25" cy="75" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .logo {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 15px;
          border-radius: 50%;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          color: #00695c;
        }
        
        .header h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 8px;
          position: relative;
          z-index: 2;
        }
        
        .header p {
          font-size: 18px;
          opacity: 0.9;
          position: relative;
          z-index: 2;
        }
        
        .content {
          padding: 40px 30px;
          background: #ffffff;
        }
        
        .welcome-message {
          text-align: center;
          margin-bottom: 35px;
        }
        
        .welcome-message h2 {
          color: #263238;
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        
        .welcome-message p {
          color: #78909c;
          font-size: 16px;
          line-height: 1.6;
        }
        
        .credentials-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 30px;
          margin: 30px 0;
          border: 2px solid rgba(0, 105, 92, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .credentials-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00695c, #439889, #ff9800);
        }
        
        .credentials-title {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          color: #263238;
        }
        
        .credentials-title::before {
          content: '🔐';
          margin-right: 10px;
          font-size: 24px;
        }
        
        .credential-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          padding: 12px 16px;
          background: white;
          border-radius: 10px;
          border: 1px solid rgba(0, 105, 92, 0.1);
          transition: all 0.3s ease;
        }
        
        .credential-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 105, 92, 0.1);
        }
        
        .credential-label {
          font-weight: 600;
          color: #00695c;
          min-width: 80px;
          margin-right: 15px;
        }
        
        .credential-value {
          font-family: 'Courier New', monospace;
          color: #263238;
          background: rgba(0, 105, 92, 0.05);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 14px;
          border: 1px solid rgba(0, 105, 92, 0.1);
        }
        
        .login-button {
          display: block;
          width: 100%;
          max-width: 300px;
          margin: 35px auto;
          padding: 18px 30px;
          background: linear-gradient(135deg, #00695c 0%, #439889 100%);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 105, 92, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .login-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .login-button:hover::before {
          left: 100%;
        }
        
        .login-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 105, 92, 0.4);
        }
        
        .info-section {
          background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
          border-radius: 15px;
          padding: 25px;
          margin: 30px 0;
          border-left: 5px solid #ff9800;
        }
        
        .info-section h3 {
          color: #e65100;
          font-size: 18px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }
        
        .info-section h3::before {
          content: '💡';
          margin-right: 10px;
        }
        
        .info-list {
          list-style: none;
          padding: 0;
        }
        
        .info-list li {
          padding: 8px 0;
          color: #bf360c;
          position: relative;
          padding-left: 25px;
        }
        
        .info-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #ff9800;
          font-weight: bold;
        }
        
        .footer {
          background: linear-gradient(135deg, #263238 0%, #37474f 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        
        .footer-content {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .footer h3 {
          color: #b0bec5;
          font-size: 16px;
          margin-bottom: 15px;
        }
        
        .footer p {
          color: #78909c;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 10px;
        }
        
        .decorative-element {
          position: absolute;
          opacity: 0.1;
          pointer-events: none;
        }
        
        .decorative-element.top-right {
          top: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, #ff9800 0%, transparent 70%);
          border-radius: 50%;
        }
        
        .decorative-element.bottom-left {
          bottom: 20px;
          left: 20px;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, #00695c 0%, transparent 70%);
          border-radius: 50%;
        }
        
        @media (max-width: 600px) {
          .container {
            margin: 10px;
            border-radius: 15px;
          }
          
          .header, .content, .footer {
            padding: 25px 20px;
          }
          
          .header h1 {
            font-size: 26px;
          }
          
          .welcome-message h2 {
            font-size: 24px;
          }
          
          .credentials-card {
            padding: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="decorative-element top-right"></div>
        <div class="decorative-element bottom-left"></div>
        
        <div class="header">
          <div class="logo">
            <div class="logo-icon">📚</div>
          </div>
          <h1>Jokko-Chain</h1>
          <p>Bibliothèque Numérique Intelligente</p>
        </div>
        
        <div class="content">
          <div class="welcome-message">
            <h2>Bienvenue ${userName} !</h2>
            <p>Nous sommes ravis de vous accueillir dans l'écosystème Jokko-Chain, votre nouvelle bibliothèque numérique de référence.</p>
          </div>
          
          <div class="credentials-card">
            <h3 class="credentials-title">Vos identifiants de connexion</h3>
            
            <div class="credential-item">
              <span class="credential-label">Email :</span>
              <span class="credential-value">${userEmail}</span>
            </div>
            
            <div class="credential-item">
              <span class="credential-label">Mot de passe :</span>
              <span class="credential-value">${temporaryPassword}</span>
            </div>
          </div>
          
          <a href="${loginUrl}" class="login-button">
            🚀 Accéder à Jokko-Chain
          </a>
          
          <div class="info-section">
            <h3>Premières étapes recommandées</h3>
            <ul class="info-list">
              <li>Changez votre mot de passe temporaire lors de votre première connexion</li>
              <li>Complétez votre profil utilisateur</li>
              <li>Explorez notre catalogue de ressources numériques</li>
              <li>Configurez vos préférences de recherche</li>
              <li>Rejoignez les communautés thématiques</li>
            </ul>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-content">
            <h3>Équipe Jokko-Chain</h3>
            <p>Votre partenaire pour l'accès démocratique au savoir numérique</p>
            <p>Pour toute assistance : support@jokko-chain.com</p>
            <p style="font-size: 12px; margin-top: 20px; opacity: 0.7;">
              © 2024 Jokko-Chain. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const textVersion = `
    Bienvenue sur Jokko-Chain - Bibliothèque Numérique Intelligente
    
    Bonjour ${userName},
    
    Nous sommes ravis de vous accueillir dans l'écosystème Jokko-Chain, votre nouvelle bibliothèque numérique de référence.
    
    VOS IDENTIFIANTS DE CONNEXION :
    ================================
    Email : ${userEmail}
    Mot de passe : ${temporaryPassword}
    
    Lien de connexion : ${loginUrl}
    
    PREMIÈRES ÉTAPES RECOMMANDÉES :
    ===============================
    • Changez votre mot de passe temporaire lors de votre première connexion
    • Complétez votre profil utilisateur
    • Explorez notre catalogue de ressources numériques
    • Configurez vos préférences de recherche
    • Rejoignez les communautés thématiques
    
    Pour toute assistance : support@jokko-chain.com
    
    Cordialement,
    L'équipe Jokko-Chain
    
    © 2024 Jokko-Chain. Tous droits réservés.
  `;

  return this.sendEmail({
    to,
    subject: '🎉 Bienvenue sur Jokko-Chain - Vos identifiants de connexion',
    html,
    text: textVersion,
  });
}

// email.service.ts - Ajout du template de rappel d'emprunt

// Ajoutez cette méthode à votre classe EmailService existante

/**
 * Envoyer un email de rappel de retour d'emprunt
 */
async sendEmpruntReminderEmail(
  to: string,
  userName: string,
  emprunts: Array<{
    id: string;
    dateRetourPrevue: Date;
    exemplaires: Array<{
      titre: string;
      auteur: string;
      isbn?: string;
    }>;
    joursRetard?: number;
    isEnRetard: boolean;
  }>,
  typeRappel: 'avant_echeance' | 'echeance_proche' | 'en_retard' | 'retard_grave' = 'echeance_proche'
): Promise<boolean> {
  
  // Configuration des messages selon le type de rappel
  const rappelConfig = {
    avant_echeance: {
      subject: '📅 Rappel : Retour d\'emprunt dans 3 jours',
      title: 'Rappel de retour d\'emprunt',
      urgence: 'info',
      color: '#2196f3',
      icon: '📅',
      message: 'Nous vous rappelons que vous avez des ouvrages à retourner prochainement.'
    },
    echeance_proche: {
      subject: '⏰ Urgent : Retour d\'emprunt demain',
      title: 'Retour d\'emprunt imminent',
      urgence: 'warning',
      color: '#ff9800',
      icon: '⏰',
      message: 'Attention ! Vos emprunts arrivent à échéance très bientôt.'
    },
    en_retard: {
      subject: '🚨 Emprunts en retard - Action requise',
      title: 'Emprunts en retard',
      urgence: 'error',
      color: '#f44336',
      icon: '🚨',
      message: 'Vos emprunts sont en retard. Merci de les retourner dans les plus brefs délais.'
    },
    retard_grave: {
      subject: '⚠️ Emprunts en retard critique - Dernière relance',
      title: 'Emprunts en retard critique',
      urgence: 'critical',
      color: '#d32f2f',
      icon: '⚠️',
      message: 'Ceci est un dernier rappel concernant vos emprunts en retard critique.'
    }
  };

  const config = rappelConfig[typeRappel];
  const loginUrl = this.configService.get('FRONTEND_URL', 'http://localhost:3000') + '/mes-emprunts';

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${config.subject}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          padding: 20px;
          color: #333;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 15px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .header {
          background: linear-gradient(135deg, ${config.color} 0%, ${config.color}dd 100%);
          color: white;
          padding: 30px;
          text-align: center;
          position: relative;
        }
        
        .header::before {
          content: '${config.icon}';
          font-size: 48px;
          display: block;
          margin-bottom: 15px;
          opacity: 0.9;
        }
        
        .header h1 {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .header p {
          font-size: 16px;
          opacity: 0.9;
        }
        
        .urgence-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .content {
          padding: 30px;
        }
        
        .greeting {
          font-size: 18px;
          margin-bottom: 20px;
          color: #333;
        }
        
        .message {
          background: ${config.color}10;
          border-left: 4px solid ${config.color};
          padding: 20px;
          margin: 20px 0;
          border-radius: 0 8px 8px 0;
        }
        
        .emprunts-list {
          margin: 25px 0;
        }
        
        .emprunt-card {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 20px;
          margin: 15px 0;
          transition: all 0.3s ease;
        }
        
        .emprunt-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .emprunt-card.retard {
          border-color: #f44336;
          background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
        }
        
        .emprunt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .emprunt-id {
          font-family: 'Courier New', monospace;
          background: ${config.color}20;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          color: ${config.color};
          font-weight: 600;
        }
        
        .date-retour {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }
        
        .date-retour.retard {
          color: #f44336;
        }
        
        .date-retour.proche {
          color: #ff9800;
        }
        
        .date-retour.normal {
          color: #4caf50;
        }
        
        .retard-badge {
          background: #f44336;
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
        }
        
        .livre-info {
          padding: 12px 0;
          border-top: 1px solid #e0e0e0;
        }
        
        .livre-info:first-child {
          border-top: none;
          padding-top: 0;
        }
        
        .livre-titre {
          font-weight: 600;
          color: #1976d2;
          margin-bottom: 4px;
          font-size: 16px;
        }
        
        .livre-auteur {
          color: #666;
          font-style: italic;
          margin-bottom: 4px;
        }
        
        .livre-isbn {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: #999;
        }
        
        .action-button {
          display: block;
          width: fit-content;
          margin: 25px auto;
          padding: 15px 30px;
          background: linear-gradient(135deg, ${config.color} 0%, ${config.color}dd 100%);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px ${config.color}30;
        }
        
        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px ${config.color}40;
        }
        
        .info-section {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          border-radius: 10px;
          padding: 20px;
          margin: 25px 0;
          border-left: 4px solid #2196f3;
        }
        
        .info-section h3 {
          color: #1565c0;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .info-list {
          list-style: none;
          padding: 0;
        }
        
        .info-list li {
          padding: 6px 0;
          color: #0277bd;
          position: relative;
          padding-left: 20px;
        }
        
        .info-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #2196f3;
          font-weight: bold;
        }
        
        .footer {
          background: #f8f9fa;
          padding: 25px;
          text-align: center;
          border-top: 1px solid #e9ecef;
        }
        
        .footer p {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 8px;
        }
        
        .contact-info {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #dee2e6;
          font-size: 13px;
          color: #999;
        }
        
        @media (max-width: 600px) {
          .container {
            margin: 10px;
            border-radius: 10px;
          }
          
          .header, .content, .footer {
            padding: 20px 15px;
          }
          
          .emprunt-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .action-button {
            width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="urgence-badge">${config.urgence.toUpperCase()}</div>
          <h1>${config.title}</h1>
          <p>Jokko-Chain - Bibliothèque Numérique</p>
        </div>
        
        <div class="content">
          <div class="greeting">Bonjour ${userName},</div>
          
          <div class="message">
            <p>${config.message}</p>
          </div>
          
          <div class="emprunts-list">
            ${emprunts.map(emprunt => {
              const dateRetour = new Date(emprunt.dateRetourPrevue);
              const dateFormatted = dateRetour.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              
              let dateClass = 'normal';
              let dateIcon = '📅';
              
              if (emprunt.isEnRetard) {
                dateClass = 'retard';
                dateIcon = '🚨';
              } else {
                const joursRestants = Math.ceil((dateRetour.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                if (joursRestants <= 1) {
                  dateClass = 'proche';
                  dateIcon = '⏰';
                }
              }
              
              return `
                <div class="emprunt-card ${emprunt.isEnRetard ? 'retard' : ''}">
                  <div class="emprunt-header">
                    <span class="emprunt-id">Emprunt #${emprunt.id.substring(0, 8)}</span>
                    <div class="date-retour ${dateClass}">
                      ${dateIcon} ${emprunt.isEnRetard ? 'En retard depuis' : 'À retourner le'} ${dateFormatted}
                      ${emprunt.joursRetard ? `<span class="retard-badge">${emprunt.joursRetard} jour(s) de retard</span>` : ''}
                    </div>
                  </div>
                  
                  ${emprunt.exemplaires.map(livre => `
                    <div class="livre-info">
                      <div class="livre-titre">${livre.titre}</div>
                      <div class="livre-auteur">par ${livre.auteur}</div>
                      ${livre.isbn ? `<div class="livre-isbn">ISBN: ${livre.isbn}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              `;
            }).join('')}
          </div>
          
          <a href="${loginUrl}" class="action-button">
            📚 Voir mes emprunts
          </a>
          
          <div class="info-section">
            <h3>💡 Informations importantes</h3>
            <ul class="info-list">
              <li>Vous pouvez prolonger vos emprunts depuis votre espace personnel</li>
              <li>En cas de retard, des pénalités peuvent s'appliquer</li>
              <li>Les ouvrages endommagés doivent être signalés</li>
              <li>Contactez-nous pour toute difficulté de retour</li>
            </ul>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Bibliothèque Jokko-Chain</strong></p>
          <p>Votre partenaire pour l'accès au savoir numérique</p>
          
          <div class="contact-info">
            <p>📧 Contact: bibliotheque@jokko-chain.com</p>
            <p>📞 Téléphone: +221 78180 72 29</p>
            <p>🌐 Web: www.jokko-chain.com</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const textVersion = `
    ${config.title} - Jokko-Chain
    
    Bonjour ${userName},
    
    ${config.message}
    
    DÉTAILS DE VOS EMPRUNTS :
    ========================
    
    ${emprunts.map(emprunt => {
      const dateRetour = new Date(emprunt.dateRetourPrevue);
      const dateFormatted = dateRetour.toLocaleDateString('fr-FR');
      
      return `
    Emprunt #${emprunt.id.substring(0, 8)}
    ${emprunt.isEnRetard ? '🚨 EN RETARD' : '📅 À retourner'} le ${dateFormatted}
    ${emprunt.joursRetard ? `⚠️ Retard de ${emprunt.joursRetard} jour(s)` : ''}
    
    Ouvrages :
    ${emprunt.exemplaires.map(livre => `    • ${livre.titre} - ${livre.auteur}`).join('\n')}
    
    `;
    }).join('')}
    
    ACTIONS RECOMMANDÉES :
    ======================
    • Connectez-vous à votre espace : ${loginUrl}
    • Prolongez vos emprunts si possible
    • Retournez les ouvrages en bibliothèque
    • Contactez-nous en cas de problème
    
    Contact : bibliotheque@jokko-chain.com
    
    Cordialement,
    L'équipe Jokko-Chain
  `;

  return this.sendEmail({
    to,
    subject: config.subject,
    html,
    text: textVersion,
  });
}
}
