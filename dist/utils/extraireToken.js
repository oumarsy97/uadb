const extractUserIdFromToken = (token) => {
    try {
        const cleanToken = token.replace(/^Bearer\s+/, '');
        const payload = this.jwtService.decode(cleanToken);
        if (!payload || !payload.sub && !payload.id && !payload.userId) {
            throw new Error('Token invalide: ID utilisateur non trouvé');
        }
        return payload.sub || payload.id || payload.userId;
    }
    catch (error) {
        throw new Error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
    }
};
//# sourceMappingURL=extraireToken.js.map