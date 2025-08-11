/*
  Warnings:

  - You are about to drop the column `type_acces` on the `HistoriqueAcces` table. All the data in the column will be lost.
  - The values [ADMINISTRATEUR] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `typeAcces` to the `HistoriqueAcces` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `HistoriqueAcces` DROP COLUMN `type_acces`,
    ADD COLUMN `typeAcces` ENUM('CONSULTATION', 'TELECHARGEMENT', 'CITATION', 'PARTAGE') NOT NULL;

-- AlterTable
ALTER TABLE `Ressource` ADD COLUMN `annee_publication` INTEGER NULL,
    ADD COLUMN `categorie_biblio` ENUM('LIVRE_ACADEMIQUE', 'MANUEL_SCOLAIRE', 'THESE_DOCTORAT', 'MEMOIRE_MASTER', 'RAPPORT_RECHERCHE', 'PERIODIQUE', 'ARTICLE_JOURNAL', 'RESSOURCE_MULTIMEDIA', 'DOCUMENT_TECHNIQUE') NULL,
    ADD COLUMN `cote_classification` VARCHAR(191) NULL,
    ADD COLUMN `doi` VARCHAR(191) NULL,
    ADD COLUMN `duree_max_emprunt_externe` INTEGER NOT NULL DEFAULT 14,
    ADD COLUMN `editeur` VARCHAR(191) NULL,
    ADD COLUMN `edition` VARCHAR(191) NULL,
    ADD COLUMN `est_empruntable` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `est_empruntable_externe` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isbn` VARCHAR(191) NULL,
    ADD COLUMN `nb_disponibles` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `nb_exemplaires` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `nb_max_exemplaires_externe` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `nb_pages` INTEGER NULL,
    ADD COLUMN `necessite_autorisation` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `date_validation` DATETIME(3) NULL,
    ADD COLUMN `droit_emprunt_exterieur` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `droit_reservation_exterieure` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `frequence_recommandation` ENUM('QUOTIDIENNE', 'HEBDOMADAIRE', 'MENSUELLE', 'JAMAIS') NOT NULL DEFAULT 'HEBDOMADAIRE',
    ADD COLUMN `nb_max_emprunts_externes` INTEGER NOT NULL DEFAULT 2,
    ADD COLUMN `preferences_recommandation` VARCHAR(191) NULL,
    ADD COLUMN `statut_validation` VARCHAR(191) NULL,
    ADD COLUMN `universites_autorisees` VARCHAR(191) NULL,
    MODIFY `role` ENUM('ETUDIANT', 'ENSEIGNANT', 'CHERCHEUR', 'BIBLIOTHECAIRE', 'ADMIN') NOT NULL,
    MODIFY `departement` VARCHAR(191) NULL,
    MODIFY `faculte` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ConventionInteruniversitaire` (
    `id` VARCHAR(191) NOT NULL,
    `universite_id_1` VARCHAR(191) NOT NULL,
    `universite_id_2` VARCHAR(191) NOT NULL,
    `date_debut` DATETIME(3) NOT NULL,
    `date_fin` DATETIME(3) NULL,
    `est_active` BOOLEAN NOT NULL DEFAULT true,
    `typeConvention` ENUM('EMPRUNT_RECIPROQUE', 'CONSULTATION_UNIQUEMENT', 'ACCES_COMPLET', 'COLLABORATION_SPECIFIQUE') NOT NULL DEFAULT 'EMPRUNT_RECIPROQUE',
    `details_convention` TEXT NULL,
    `documents_url` VARCHAR(191) NULL,
    `contact_universite_1` VARCHAR(191) NULL,
    `contact_universite_2` VARCHAR(191) NULL,

    UNIQUE INDEX `ConventionInteruniversitaire_universite_id_1_universite_id_2_key`(`universite_id_1`, `universite_id_2`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatistiqueInteruniversitaire` (
    `id` VARCHAR(191) NOT NULL,
    `universite_source` VARCHAR(191) NOT NULL,
    `universite_destination` VARCHAR(191) NOT NULL,
    `mois` INTEGER NOT NULL,
    `annee` INTEGER NOT NULL,
    `nb_emprunts` INTEGER NOT NULL DEFAULT 0,
    `nb_reservations` INTEGER NOT NULL DEFAULT 0,
    `ressources_plus_consultees` VARCHAR(191) NULL,
    `domaines_plus_consultes` VARCHAR(191) NULL,

    UNIQUE INDEX `StatistiqueInteruniversitaire_universite_source_universite_d_key`(`universite_source`, `universite_destination`, `mois`, `annee`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `date_reservation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_debut` DATETIME(3) NOT NULL,
    `date_fin` DATETIME(3) NOT NULL,
    `statut` ENUM('EN_ATTENTE', 'CONFIRMEE', 'ANNULEE', 'TERMINEE', 'RETARD') NOT NULL DEFAULT 'EN_ATTENTE',
    `commentaire` TEXT NULL,
    `universite_emprunteur` VARCHAR(191) NOT NULL,
    `motif_reservation` VARCHAR(191) NULL,
    `valide_par` VARCHAR(191) NULL,

    INDEX `Reservation_date_debut_date_fin_idx`(`date_debut`, `date_fin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExemplairePhysique` (
    `id` VARCHAR(191) NOT NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `cote` VARCHAR(191) NOT NULL,
    `etat` ENUM('NEUF', 'BON', 'USAGE', 'ABIME', 'PERDU') NOT NULL DEFAULT 'BON',
    `disponible` BOOLEAN NOT NULL DEFAULT true,
    `localisation` VARCHAR(191) NOT NULL,
    `date_acquisition` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `est_reservable_externe` BOOLEAN NULL DEFAULT false,
    `est_empruntable_externe` BOOLEAN NULL DEFAULT false,

    INDEX `ExemplairePhysique_ressource_id_idx`(`ressource_id`),
    INDEX `ExemplairePhysique_disponible_idx`(`disponible`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emprunt` (
    `id` VARCHAR(191) NOT NULL,
    `exemplaire_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `date_emprunt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_retour_prevue` DATETIME(3) NOT NULL,
    `date_retour_effective` DATETIME(3) NULL,
    `statut` ENUM('EN_COURS', 'RETOURNE', 'RETARD', 'PERDU') NOT NULL DEFAULT 'EN_COURS',
    `commentaire` TEXT NULL,
    `universite_emprunteur` VARCHAR(191) NOT NULL,
    `est_emprunt_externe` BOOLEAN NOT NULL DEFAULT false,
    `motif_emprunt` VARCHAR(191) NULL,
    `valide_par` VARCHAR(191) NULL,

    INDEX `Emprunt_date_emprunt_date_retour_prevue_idx`(`date_emprunt`, `date_retour_prevue`),
    INDEX `Emprunt_statut_idx`(`statut`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recommandation` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `ressource_id` VARCHAR(191) NOT NULL,
    `date_recommandation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `score` DOUBLE NOT NULL,
    `motif_recommandation` ENUM('INTERET_SIMILAIRE', 'CONSULTE_RECEMMENT', 'POPULAIRE_DOMAINE', 'NOUVEAU_CONTENU', 'SUGGESTION_ENSEIGNANT') NOT NULL,
    `est_vue` BOOLEAN NOT NULL DEFAULT false,
    `est_interuniversitaire` BOOLEAN NOT NULL DEFAULT false,
    `universite_source` VARCHAR(191) NULL,

    INDEX `Recommandation_user_id_est_vue_idx`(`user_id`, `est_vue`),
    INDEX `Recommandation_ressource_id_idx`(`ressource_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatistiqueBibliotheque` (
    `id` VARCHAR(191) NOT NULL,
    `universite_id` VARCHAR(191) NOT NULL,
    `mois` INTEGER NOT NULL,
    `annee` INTEGER NOT NULL,
    `nb_emprunts` INTEGER NOT NULL DEFAULT 0,
    `nb_emprunts_externes` INTEGER NOT NULL DEFAULT 0,
    `nb_reservations` INTEGER NOT NULL DEFAULT 0,
    `nb_reservations_externes` INTEGER NOT NULL DEFAULT 0,
    `nb_retards_rendu` INTEGER NOT NULL DEFAULT 0,
    `taux_rotation` DOUBLE NULL,
    `categories_plus_empruntees` VARCHAR(191) NULL,
    `universites_plus_frequentes` VARCHAR(191) NULL,

    INDEX `StatistiqueBibliotheque_annee_mois_idx`(`annee`, `mois`),
    UNIQUE INDEX `StatistiqueBibliotheque_universite_id_mois_annee_key`(`universite_id`, `mois`, `annee`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `date_creation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `est_lue` BOOLEAN NOT NULL DEFAULT false,
    `typeNotification` ENUM('EMPRUNT', 'RAPPEL_RETOUR', 'RESERVATION_CONFIRMEE', 'NOUVELLE_RESSOURCE', 'RECOMMANDATION', 'PARTAGE', 'CONVENTION', 'ADMINISTRATIF') NOT NULL,
    `ressource_id` VARCHAR(191) NULL,

    INDEX `Notification_user_id_est_lue_idx`(`user_id`, `est_lue`),
    INDEX `Notification_date_creation_idx`(`date_creation`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JournalAudit` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `action` VARCHAR(191) NOT NULL,
    `entite` VARCHAR(191) NOT NULL,
    `entite_id` VARCHAR(191) NOT NULL,
    `date_action` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `details_action` JSON NOT NULL,
    `ip_adresse` VARCHAR(191) NOT NULL,

    INDEX `JournalAudit_date_action_idx`(`date_action`),
    INDEX `JournalAudit_user_id_idx`(`user_id`),
    INDEX `JournalAudit_entite_entite_id_idx`(`entite`, `entite_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Collection_est_publique_idx` ON `Collection`(`est_publique`);

-- CreateIndex
CREATE INDEX `CollectionRessource_date_ajout_idx` ON `CollectionRessource`(`date_ajout`);

-- CreateIndex
CREATE INDEX `Commentaire_ressource_id_date_creation_idx` ON `Commentaire`(`ressource_id`, `date_creation`);

-- CreateIndex
CREATE INDEX `Commentaire_est_modere_idx` ON `Commentaire`(`est_modere`);

-- CreateIndex
CREATE INDEX `DonneesRecommandation_date_donnee_idx` ON `DonneesRecommandation`(`date_donnee`);

-- CreateIndex
CREATE INDEX `Favori_date_ajout_idx` ON `Favori`(`date_ajout`);

-- CreateIndex
CREATE INDEX `HistoriqueAcces_date_acces_idx` ON `HistoriqueAcces`(`date_acces`);

-- CreateIndex
CREATE INDEX `HistoriqueAcces_ressource_id_typeAcces_idx` ON `HistoriqueAcces`(`ressource_id`, `typeAcces`);

-- CreateIndex
CREATE INDEX `PartageUniversite_date_partage_idx` ON `PartageUniversite`(`date_partage`);

-- CreateIndex
CREATE INDEX `PartageUniversite_est_actif_idx` ON `PartageUniversite`(`est_actif`);

-- CreateIndex
CREATE INDEX `Ressource_date_creation_date_publication_idx` ON `Ressource`(`date_creation`, `date_publication`);

-- CreateIndex
CREATE INDEX `Ressource_type_categorie_biblio_idx` ON `Ressource`(`type`, `categorie_biblio`);

-- CreateIndex
CREATE INDEX `Ressource_est_empruntable_est_empruntable_externe_idx` ON `Ressource`(`est_empruntable`, `est_empruntable_externe`);

-- CreateIndex
CREATE INDEX `Ressource_est_valide_est_archive_idx` ON `Ressource`(`est_valide`, `est_archive`);

-- CreateIndex
CREATE INDEX `TransactionBlockchain_type_transaction_statut_idx` ON `TransactionBlockchain`(`type_transaction`, `statut`);

-- CreateIndex
CREATE INDEX `TransactionBlockchain_date_transaction_idx` ON `TransactionBlockchain`(`date_transaction`);

-- CreateIndex
CREATE INDEX `User_role_idx` ON `User`(`role`);

-- CreateIndex
CREATE INDEX `User_email_idx` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `ConventionInteruniversitaire` ADD CONSTRAINT `ConventionInteruniversitaire_universite_id_1_fkey` FOREIGN KEY (`universite_id_1`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConventionInteruniversitaire` ADD CONSTRAINT `ConventionInteruniversitaire_universite_id_2_fkey` FOREIGN KEY (`universite_id_2`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StatistiqueInteruniversitaire` ADD CONSTRAINT `StatistiqueInteruniversitaire_universite_source_fkey` FOREIGN KEY (`universite_source`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StatistiqueInteruniversitaire` ADD CONSTRAINT `StatistiqueInteruniversitaire_universite_destination_fkey` FOREIGN KEY (`universite_destination`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_universite_emprunteur_fkey` FOREIGN KEY (`universite_emprunteur`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExemplairePhysique` ADD CONSTRAINT `ExemplairePhysique_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprunt` ADD CONSTRAINT `Emprunt_exemplaire_id_fkey` FOREIGN KEY (`exemplaire_id`) REFERENCES `ExemplairePhysique`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprunt` ADD CONSTRAINT `Emprunt_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprunt` ADD CONSTRAINT `Emprunt_universite_emprunteur_fkey` FOREIGN KEY (`universite_emprunteur`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recommandation` ADD CONSTRAINT `Recommandation_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recommandation` ADD CONSTRAINT `Recommandation_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recommandation` ADD CONSTRAINT `Recommandation_universite_source_fkey` FOREIGN KEY (`universite_source`) REFERENCES `Universite`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoriqueAcces` ADD CONSTRAINT `HistoriqueAcces_universite_source_fkey` FOREIGN KEY (`universite_source`) REFERENCES `Universite`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DonneesRecommandation` ADD CONSTRAINT `DonneesRecommandation_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DonneesRecommandation` ADD CONSTRAINT `DonneesRecommandation_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartageUniversite` ADD CONSTRAINT `PartageUniversite_universite_source_fkey` FOREIGN KEY (`universite_source`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartageUniversite` ADD CONSTRAINT `PartageUniversite_universite_destination_fkey` FOREIGN KEY (`universite_destination`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransactionBlockchain` ADD CONSTRAINT `TransactionBlockchain_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransactionBlockchain` ADD CONSTRAINT `TransactionBlockchain_universite_origine_fkey` FOREIGN KEY (`universite_origine`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransactionBlockchain` ADD CONSTRAINT `TransactionBlockchain_universite_destination_fkey` FOREIGN KEY (`universite_destination`) REFERENCES `Universite`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StatistiqueBibliotheque` ADD CONSTRAINT `StatistiqueBibliotheque_universite_id_fkey` FOREIGN KEY (`universite_id`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_ressource_id_fkey` FOREIGN KEY (`ressource_id`) REFERENCES `Ressource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JournalAudit` ADD CONSTRAINT `JournalAudit_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Collection` RENAME INDEX `Collection_user_id_fkey` TO `Collection_user_id_idx`;

-- RenameIndex
ALTER TABLE `Notation` RENAME INDEX `Notation_ressource_id_fkey` TO `Notation_ressource_id_idx`;

-- RenameIndex
ALTER TABLE `Ressource` RENAME INDEX `Ressource_universite_id_fkey` TO `Ressource_universite_id_idx`;

-- RenameIndex
ALTER TABLE `User` RENAME INDEX `User_universite_id_fkey` TO `User_universite_id_idx`;
