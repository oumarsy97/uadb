-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mot_de_passe` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `role` ENUM('ETUDIANT', 'ENSEIGNANT', 'CHERCHEUR', 'BIBLIOTHECAIRE', 'ADMINISTRATEUR') NOT NULL,
    `departement` VARCHAR(191) NOT NULL,
    `faculte` VARCHAR(191) NOT NULL,
    `specialite` VARCHAR(191) NULL,
    `niveau_etudes` VARCHAR(191) NULL,
    `date_inscription` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `derniere_connexion` DATETIME(3) NULL,
    `est_actif` BOOLEAN NOT NULL DEFAULT true,
    `universite` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ressource` (
    `id` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `type` ENUM('MEMOIRE', 'THESE', 'ARTICLE_SCIENTIFIQUE', 'COURS', 'SUPPORT_PEDAGOGIQUE', 'RAPPORT_RECHERCHE', 'LIVRE', 'CONFERENCE') NOT NULL,
    `langue` VARCHAR(191) NOT NULL DEFAULT 'fr',
    `url_fichier` VARCHAR(191) NOT NULL,
    `format` VARCHAR(191) NOT NULL,
    `reference_blockchain` VARCHAR(191) NOT NULL,
    `date_creation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modification` DATETIME(3) NOT NULL,
    `est_publique` BOOLEAN NOT NULL DEFAULT true,
    `mots_cles` VARCHAR(191) NOT NULL,
    `auteur_id` VARCHAR(191) NOT NULL,
    `universite_source` VARCHAR(191) NOT NULL,
    `est_externe` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Ressource_reference_blockchain_key`(`reference_blockchain`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Favori` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `date_ajout` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `note` TEXT NULL,

    UNIQUE INDEX `Favori_user_id_ressource_id_key`(`user_id`, `ressource_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Commentaire` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `contenu` TEXT NOT NULL,
    `date_creation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `est_modere` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notation` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `note` INTEGER NOT NULL,
    `date_notation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Notation_user_id_ressource_id_key`(`user_id`, `ressource_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoriqueAcces` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `date_acces` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type_acces` ENUM('CONSULTATION', 'TELECHARGEMENT', 'CITATION', 'PARTAGE') NOT NULL,
    `ip_acces` VARCHAR(191) NOT NULL,
    `universite_source` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DonneesRecommandation` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `score` DOUBLE NOT NULL,
    `type_interaction` ENUM('VUE', 'TELECHARGEMENT', 'FAVORI', 'NOTATION', 'TEMPS_LECTURE', 'RECHERCHE_SIMILAIRE') NOT NULL,
    `date_donnee` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `DonneesRecommandation_user_id_idx`(`user_id`),
    INDEX `DonneesRecommandation_ressource_id_idx`(`ressource_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Collection` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `est_publique` BOOLEAN NOT NULL DEFAULT false,
    `date_creation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CollectionRessource` (
    `id` VARCHAR(191) NOT NULL,
    `collection_id` VARCHAR(191) NOT NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `date_ajout` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `notes` TEXT NULL,

    UNIQUE INDEX `CollectionRessource_collection_id_ressource_id_key`(`collection_id`, `ressource_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PartageUniversite` (
    `id` VARCHAR(191) NOT NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `universite_source` VARCHAR(191) NOT NULL,
    `universite_destination` VARCHAR(191) NOT NULL,
    `date_partage` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `est_actif` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `PartageUniversite_ressource_id_universite_destination_key`(`ressource_id`, `universite_destination`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransactionBlockchain` (
    `id` VARCHAR(191) NOT NULL,
    `reference_blockchain` VARCHAR(191) NOT NULL,
    `type_transaction` ENUM('PUBLICATION', 'MODIFICATION', 'ACCES', 'SUPPRESSION', 'PARTAGE') NOT NULL,
    `ressource_id` VARCHAR(191) NULL,
    `universite_origine` VARCHAR(191) NOT NULL,
    `universite_destination` VARCHAR(191) NULL,
    `date_transaction` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `statut` ENUM('INITIEE', 'VALIDEE', 'REJETEE', 'ANNULEE') NOT NULL,
    `hash_transaction` VARCHAR(191) NOT NULL,
    `donnees_techniques` JSON NULL,

    UNIQUE INDEX `TransactionBlockchain_reference_blockchain_key`(`reference_blockchain`),
    UNIQUE INDEX `TransactionBlockchain_hash_transaction_key`(`hash_transaction`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ressource` ADD CONSTRAINT `Ressource_auteur_id_fkey` FOREIGN KEY (`auteur_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favori` ADD CONSTRAINT `Favori_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favori` ADD CONSTRAINT `Favori_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notation` ADD CONSTRAINT `Notation_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notation` ADD CONSTRAINT `Notation_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoriqueAcces` ADD CONSTRAINT `HistoriqueAcces_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoriqueAcces` ADD CONSTRAINT `HistoriqueAcces_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Collection` ADD CONSTRAINT `Collection_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollectionRessource` ADD CONSTRAINT `CollectionRessource_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `Collection`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollectionRessource` ADD CONSTRAINT `CollectionRessource_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartageUniversite` ADD CONSTRAINT `PartageUniversite_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
