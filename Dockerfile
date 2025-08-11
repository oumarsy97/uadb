# Utiliser une image Node.js standard au lieu d'Alpine
FROM node:18-bullseye-slim

# Installer les dépendances système nécessaires
RUN apt-get update && apt-get install -y \
    openssl \
    ca-certificates \
    libssl-dev \
    procps \
    netcat \
    && rm -rf /var/lib/apt/lists/*

# Définir les variables d'environnement pour OpenSSL
ENV OPENSSL_CONF=""
ENV PRISMA_CLI_BINARY_TARGETS="debian-openssl-1.1.x"
ENV NODE_OPTIONS="--openssl-legacy-provider"

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le schema Prisma
COPY prisma ./prisma/

# Copier le reste du code
COPY . .

# Exposer le port
EXPOSE 4000

# Commande par défaut
CMD ["npm", "run", "start:uadb"]