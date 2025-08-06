#!/bin/bash
set -e

echo "🚀 Démarrage de MySQL et de l'application..."

# Initialiser MySQL si nécessaire
if [ ! -d "/var/lib/mysql/mysql" ]; then
    echo "📊 Initialisation de MySQL..."
    mysqld --initialize-insecure --user=mysql --datadir=/var/lib/mysql
fi

# Démarrer MySQL en arrière-plan
echo "🔄 Démarrage de MySQL..."
mysqld --user=mysql --datadir=/var/lib/mysql --socket=/var/run/mysqld/mysqld.sock &

# Attendre que MySQL soit prêt
echo "⏳ Attente de MySQL..."
while ! mysqladmin ping -h localhost --silent; do
    sleep 1
done

echo "✅ MySQL est prêt!"

# Créer la base de données
echo "📋 Création de la base de données..."
mysql -u root -e "CREATE DATABASE IF NOT EXISTS dbuadb;"

# Variables d'environnement
export DATABASE_URL="mysql://root@localhost:3306/dbuadb"

# Générer Prisma et appliquer le schéma
echo "⚙️ Configuration de Prisma..."
npx prisma generate
npx prisma db push --accept-data-loss

echo "🚀 Démarrage de l'application..."
exec npm run start:uadb
