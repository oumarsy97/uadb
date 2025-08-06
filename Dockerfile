# Version minimale sans MySQL client local
FROM node:18-alpine

# Installer seulement les dépendances essentielles
RUN apk add --no-cache \
    openssl \
    ca-certificates \
    bash

# Variables d'environnement
ENV OPENSSL_CONF=""
ENV PRISMA_CLI_BINARY_TARGETS="linux-musl"
ENV NODE_OPTIONS="--openssl-legacy-provider"

# Répertoire de travail
WORKDIR /app

# Copier et installer dépendances
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copier Prisma
COPY prisma ./prisma/
RUN npx prisma generate

# Copier le code
COPY . .

# Script de démarrage
COPY start-simple.sh ./start.sh
RUN chmod +x start.sh

# Port
EXPOSE ${PORT:-4000}

# Démarrage
CMD ["./start.sh"]
