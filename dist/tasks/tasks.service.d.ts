import { EmprunteService } from '../emprunte/emprunte.service';
import { EmailService } from '../meservices/mail/email.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class TasksService {
    private readonly emprunteService;
    private readonly emailService;
    private readonly prisma;
    private readonly logger;
    constructor(emprunteService: EmprunteService, emailService: EmailService, prisma: PrismaService);
    handleEmpruntEnRetard(): Promise<void>;
    sendRappelsAvantEcheance(): Promise<void>;
    sendRappelsEcheanceProche(): Promise<void>;
    sendRappelsRetard(): Promise<void>;
    sendRappelsRetardCritique(): Promise<void>;
    private sendRetardEmails;
    private getEmpruntsForReminders;
    private getEmpruntsEnRetardForEmails;
    private getEmpruntsEnRetardCritique;
    generateDailyStats(): Promise<void>;
    healthCheck(): Promise<void>;
}
