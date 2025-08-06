# ATTENTION: Cette approche n'est pas recommandée en production
FROM node:18-bullseye-slim

# Installer Node.js et MySQL
RUN apt-get update && apt-get install -y \
    openssl \
    ca-certificates \
    libssl-dev \
    procps \
    netcat \
    mysql-server \
    mysql-client \
    && rm -rf /var/lib/apt/lists/*

# Configuration MySQL
RUN usermod -d /var/lib/mysql/ mysql
RUN mkdir -p /var/run/mysqld && chown mysql:mysql /var/run/mysqld

# Variables d'environnement
ENV OPENSSL_CONF=""
ENV PRISMA_CLI_BINARY_TARGETS="debian-openssl-1.1.x"
ENV NODE_OPTIONS="--openssl-legacy-provider"
ENV DATABASE_URL="mysql://root@localhost:3306/dbuadb"

WORKDIR /app

# Copier et installer les dépendances
COPY package*.json ./
RUN npm ci --only=production

# Copier Prisma et code
COPY prisma ./prisma/
RUN npx prisma generate
COPY . .

EXPOSE ${PORT:-4000}

# Script de démarrage qui lance MySQL puis l'app
COPY start-with-mysql.sh ./
RUN chmod +x start-with-mysql.sh

CMD ["./start-with-mysql.sh"]
