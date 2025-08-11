/*
  Warnings:

  - You are about to drop the column `est_modere` on the `Commentaire` table. All the data in the column will be lost.
  - You are about to drop the column `ip_acces` on the `HistoriqueAcces` table. All the data in the column will be lost.
  - You are about to drop the column `motif_reservation` on the `Reservation` table. All the data in the column will be lost.
  - The values [LIVRE_ACADEMIQUE] on the enum `Ressource_categorie_biblio` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `donnees_techniques` on the `TransactionBlockchain` table. All the data in the column will be lost.
  - You are about to drop the column `date_inscription` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `date_validation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `departement` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `droit_emprunt_exterieur` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `droit_reservation_exterieure` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `faculte` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nb_max_emprunts_externes` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `specialite` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `statut_validation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `universites_autorisees` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `PartageUniversite` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `niveau_etudes` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `PartageUniversite` DROP FOREIGN KEY `PartageUniversite_ressource_id_fkey`;

-- DropForeignKey
ALTER TABLE `PartageUniversite` DROP FOREIGN KEY `PartageUniversite_universite_destination_fkey`;

-- DropForeignKey
ALTER TABLE `PartageUniversite` DROP FOREIGN KEY `PartageUniversite_universite_source_fkey`;

-- DropIndex
DROP INDEX `Commentaire_est_modere_idx` ON `Commentaire`;

-- DropIndex
DROP INDEX `User_role_idx` ON `User`;

-- AlterTable
ALTER TABLE `Commentaire` DROP COLUMN `est_modere`,
    ADD COLUMN `universite_source` VARCHAR(191) NULL,
    ADD COLUMN `universite_utilisateur` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `ExemplairePhysique` ADD COLUMN `qr_code` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Favori` ADD COLUMN `universite_source` VARCHAR(191) NULL,
    ADD COLUMN `universite_utilisateur` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `HistoriqueAcces` DROP COLUMN `ip_acces`,
    ADD COLUMN `universite_utilisateur` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Notation` ADD COLUMN `universite_source` VARCHAR(191) NULL,
    ADD COLUMN `universite_utilisateur` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Reservation` DROP COLUMN `motif_reservation`;

-- AlterTable
ALTER TABLE `Ressource` ADD COLUMN `validation` ENUM('EN_ATTENTE', 'VALIDE', 'REJETEE', 'ANNULEE') NOT NULL DEFAULT 'EN_ATTENTE',
    MODIFY `categorie_biblio` ENUM('LIVRE', 'MANUEL_SCOLAIRE', 'THESE_DOCTORAT', 'MEMOIRE_MASTER', 'MEMOIRE_LICENCE', 'RAPPORT_RECHERCHE', 'PERIODIQUE', 'ARTICLE_JOURNAL', 'RESSOURCE_MULTIMEDIA', 'DOCUMENT_TECHNIQUE') NULL;

-- AlterTable
ALTER TABLE `TransactionBlockchain` DROP COLUMN `donnees_techniques`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `date_inscription`,
    DROP COLUMN `date_validation`,
    DROP COLUMN `departement`,
    DROP COLUMN `droit_emprunt_exterieur`,
    DROP COLUMN `droit_reservation_exterieure`,
    DROP COLUMN `faculte`,
    DROP COLUMN `nb_max_emprunts_externes`,
    DROP COLUMN `role`,
    DROP COLUMN `specialite`,
    DROP COLUMN `statut_validation`,
    DROP COLUMN `universites_autorisees`,
    ADD COLUMN `telephone` VARCHAR(191) NULL,
    MODIFY `niveau_etudes` ENUM('ETUDIANT', 'ENSEIGNANT', 'CHERCHEUR', 'BIBLIOTHECAIRE', 'ADMIN') NOT NULL;

-- DropTable
DROP TABLE `PartageUniversite`;

-- CreateTable
CREATE TABLE `ReglePret` (
    `id` VARCHAR(191) NOT NULL,
    `universite_id` VARCHAR(191) NOT NULL,
    `role_utilisateur` ENUM('ETUDIANT', 'ENSEIGNANT', 'CHERCHEUR', 'BIBLIOTHECAIRE', 'ADMIN') NOT NULL,
    `nombre_max_ouvrages` INTEGER NOT NULL DEFAULT 2,
    `duree_emprunt_jours` INTEGER NOT NULL DEFAULT 15,
    `nb_renouvellements` INTEGER NOT NULL DEFAULT 1,
    `penalite_retard_jours` BOOLEAN NOT NULL DEFAULT true,
    `exige_carte_valide` BOOLEAN NOT NULL DEFAULT true,
    `date_mise_a_jour` DATETIME(3) NOT NULL,
    `est_actif` BOOLEAN NOT NULL DEFAULT true,

    INDEX `ReglePret_universite_id_idx`(`universite_id`),
    INDEX `ReglePret_role_utilisateur_idx`(`role_utilisateur`),
    UNIQUE INDEX `ReglePret_universite_id_role_utilisateur_key`(`universite_id`, `role_utilisateur`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PolitiqueBibliotheque` (
    `id` VARCHAR(191) NOT NULL,
    `universite_id` VARCHAR(191) NOT NULL,
    `politique_retour` TEXT NOT NULL,
    `politique_perte` TEXT NOT NULL,
    `penalite_retard` TEXT NOT NULL,
    `est_active` BOOLEAN NOT NULL DEFAULT true,
    `date_mise_a_jour` DATETIME(3) NOT NULL,

    INDEX `PolitiqueBibliotheque_universite_id_idx`(`universite_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SanctionUtilisateur` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `type_restriction` ENUM('INTERDICTION_EMPRUNT', 'LIMITATION_SERVICES', 'SUSPENSION_COMPTE', 'AMENDE_FINANCIERE') NOT NULL,
    `date_debut` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_fin` DATETIME(3) NOT NULL,
    `motif` TEXT NOT NULL,
    `emprunt_id` VARCHAR(191) NULL,
    `est_active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `SanctionUtilisateur_user_id_est_active_idx`(`user_id`, `est_active`),
    INDEX `SanctionUtilisateur_date_fin_idx`(`date_fin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etudiant` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `numero_etudiant` VARCHAR(191) NOT NULL,
    `date_naissance` DATETIME(3) NOT NULL,
    `date_inscription` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `departement` VARCHAR(191) NULL,
    `faculte` VARCHAR(191) NULL,
    `specialite` VARCHAR(191) NULL,
    `niveau_etudes` ENUM('LICENCE', 'MASTER', 'DOCTORAT', 'POSTDOCTORAT') NOT NULL DEFAULT 'LICENCE',

    UNIQUE INDEX `Etudiant_numero_etudiant_key`(`numero_etudiant`),
    INDEX `Etudiant_user_id_idx`(`user_id`),
    INDEX `Etudiant_departement_idx`(`departement`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enseignant` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `numero_enseignant` VARCHAR(191) NOT NULL,
    `date_naissance` DATETIME(3) NOT NULL,
    `specialite` VARCHAR(191) NULL,

    UNIQUE INDEX `Enseignant_numero_enseignant_key`(`numero_enseignant`),
    INDEX `Enseignant_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bibliothecaire` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `numero_bibliothecaire` VARCHAR(191) NOT NULL,
    `date_naissance` DATETIME(3) NOT NULL,
    `adresse` VARCHAR(191) NULL,
    `ville` VARCHAR(191) NULL,
    `pays` VARCHAR(191) NULL,

    UNIQUE INDEX `Bibliothecaire_numero_bibliothecaire_key`(`numero_bibliothecaire`),
    INDEX `Bibliothecaire_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Administrateur` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `numero_administrateur` VARCHAR(191) NOT NULL,
    `date_naissance` DATETIME(3) NOT NULL,
    `adresse` VARCHAR(191) NULL,
    `ville` VARCHAR(191) NULL,
    `pays` VARCHAR(191) NULL,

    UNIQUE INDEX `Administrateur_numero_administrateur_key`(`numero_administrateur`),
    INDEX `Administrateur_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Commentaire_universite_source_idx` ON `Commentaire`(`universite_source`);

-- CreateIndex
CREATE INDEX `Commentaire_universite_utilisateur_idx` ON `Commentaire`(`universite_utilisateur`);

-- CreateIndex
CREATE INDEX `ExemplairePhysique_etat_idx` ON `ExemplairePhysique`(`etat`);

-- CreateIndex
CREATE INDEX `ExemplairePhysique_qr_code_idx` ON `ExemplairePhysique`(`qr_code`);

-- CreateIndex
CREATE INDEX `Favori_universite_source_idx` ON `Favori`(`universite_source`);

-- CreateIndex
CREATE INDEX `Favori_universite_utilisateur_idx` ON `Favori`(`universite_utilisateur`);

-- CreateIndex
CREATE INDEX `Notation_universite_source_idx` ON `Notation`(`universite_source`);

-- CreateIndex
CREATE INDEX `Notation_universite_utilisateur_idx` ON `Notation`(`universite_utilisateur`);

-- CreateIndex
CREATE INDEX `User_preferences_recommandation_idx` ON `User`(`preferences_recommandation`);

-- CreateIndex
CREATE INDEX `User_frequence_recommandation_idx` ON `User`(`frequence_recommandation`);

-- CreateIndex
CREATE INDEX `User_niveau_etudes_idx` ON `User`(`niveau_etudes`);

-- AddForeignKey
ALTER TABLE `ReglePret` ADD CONSTRAINT `ReglePret_universite_id_fkey` FOREIGN KEY (`universite_id`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PolitiqueBibliotheque` ADD CONSTRAINT `PolitiqueBibliotheque_universite_id_fkey` FOREIGN KEY (`universite_id`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SanctionUtilisateur` ADD CONSTRAINT `SanctionUtilisateur_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SanctionUtilisateur` ADD CONSTRAINT `SanctionUtilisateur_emprunt_id_fkey` FOREIGN KEY (`emprunt_id`) REFERENCES `Emprunt`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_valide_par_fkey` FOREIGN KEY (`valide_par`) REFERENCES `Bibliothecaire`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etudiant` ADD CONSTRAINT `Etudiant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enseignant` ADD CONSTRAINT `Enseignant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bibliothecaire` ADD CONSTRAINT `Bibliothecaire_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Administrateur` ADD CONSTRAINT `Administrateur_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
