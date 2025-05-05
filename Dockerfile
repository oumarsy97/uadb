FROM node:18-alpine AS builder

# Définition des arguments
ARG PORT=4000

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie du reste du code
COPY . .

# Build de l'application
RUN npm run build

# Image de production
FROM node:18-alpine

ARG PORT=4000
ENV PORT=$PORT

WORKDIR /app

# Copie des fichiers nécessaires depuis l'étape de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Exposition du port configuré
EXPOSE $PORT

# Démarrage de l'application
CMD ["node", "dist/main", "--port", "$PORT"]