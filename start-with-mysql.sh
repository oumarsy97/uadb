#!/bin/bash
set -e

echo "🚀 Démarrage de l'application..."

# Vérifier DATABASE_URL
if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL requis!"
    exit 1
fi

echo "⚙️ Génération Prisma..."
npx prisma generate

echo "📊 Synchronisation base de données..."
npx prisma db push --accept-data-loss || echo "⚠️ Erreur DB - continuons"

echo "✅ Lancement application..."
exec npm run start:uadb
