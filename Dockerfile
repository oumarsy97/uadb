# Dockerfile optimisé pour Railway
FROM node:18-alpine

# Installer les dépendances système
RUN apk add --no-cache openssl ca-certificates bash curl

# Variables d'environnement
ENV OPENSSL_CONF=""
ENV PRISMA_CLI_BINARY_TARGETS="linux-musl"
ENV NODE_OPTIONS="--openssl-legacy-provider"

WORKDIR /app

# Copier package.json
COPY package*.json ./

# Installer dépendances
RUN npm ci --only=production && npm cache clean --force

# Copier Prisma
COPY prisma ./prisma/

# Générer client Prisma
RUN npx prisma generate

# Copier le code
COPY . .

# Exposer le port (Railway utilise PORT)
EXPOSE $PORT

# Commande de démarrage
CMD ["sh", "-c", "npx prisma db push --accept-data-loss && npm run start:uadb"]
