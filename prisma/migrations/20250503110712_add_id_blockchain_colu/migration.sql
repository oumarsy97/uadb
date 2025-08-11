/*
  Warnings:

  - You are about to drop the column `est_externe` on the `Ressource` table. All the data in the column will be lost.
  - You are about to drop the column `reference_blockchain` on the `Ressource` table. All the data in the column will be lost.
  - You are about to drop the column `universite_source` on the `Ressource` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Ressource` DROP FOREIGN KEY `Ressource_auteur_id_fkey`;

-- DropIndex
DROP INDEX `Ressource_auteur_id_fkey` ON `Ressource`;

-- DropIndex
DROP INDEX `Ressource_reference_blockchain_key` ON `Ressource`;

-- AlterTable
ALTER TABLE `Ressource` DROP COLUMN `est_externe`,
    DROP COLUMN `reference_blockchain`,
    DROP COLUMN `universite_source`,
    ADD COLUMN `affiliation_auteur_externe` VARCHAR(191) NULL,
    ADD COLUMN `nom_auteur_externe` VARCHAR(191) NULL,
    ADD COLUMN `prenom_auteur_externe` VARCHAR(191) NULL,
    MODIFY `auteur_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Ressource` ADD CONSTRAINT `Ressource_auteur_id_fkey` FOREIGN KEY (`auteur_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
