/*
  Warnings:

  - You are about to drop the column `contact_universite_1` on the `ConventionInteruniversitaire` table. All the data in the column will be lost.
  - You are about to drop the column `contact_universite_2` on the `ConventionInteruniversitaire` table. All the data in the column will be lost.
  - You are about to drop the column `documents_url` on the `ConventionInteruniversitaire` table. All the data in the column will be lost.
  - You are about to drop the column `est_publique` on the `Ressource` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ConventionInteruniversitaire` DROP FOREIGN KEY `ConventionInteruniversitaire_universite_id_1_fkey`;

-- DropForeignKey
ALTER TABLE `ConventionInteruniversitaire` DROP FOREIGN KEY `ConventionInteruniversitaire_universite_id_2_fkey`;

-- DropIndex
DROP INDEX `ConventionInteruniversitaire_universite_id_2_fkey` ON `ConventionInteruniversitaire`;

-- AlterTable
ALTER TABLE `ConventionInteruniversitaire` DROP COLUMN `contact_universite_1`,
    DROP COLUMN `contact_universite_2`,
    DROP COLUMN `documents_url`,
    MODIFY `date_debut` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Ressource` DROP COLUMN `est_publique`;
