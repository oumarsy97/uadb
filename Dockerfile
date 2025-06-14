# Dockerfile pour développement avec hot reload
FROM node:18-alpine



# 2) Définir le répertoire de travail
WORKDIR /app

# 3) Copier et installer les dépendances (inclut les devDependencies)
COPY package*.json ./
RUN npm ci

# 4) Copier le schéma Prisma et générer le client
COPY prisma ./prisma/
RUN npx prisma generate

# 5) Copier le reste de votre code **après** l'installation pour profiter du cache
COPY . .

# 6) Exposer le port sur lequel NestJS écoute
EXPOSE 4000

# 7) Commande par défaut pour le hot‑reload
CMD ["npm", "run", "start:dev"]
