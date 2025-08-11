/*
  Warnings:

  - You are about to drop the column `universite` on the `User` table. All the data in the column will be lost.
  - Added the required column `universite_id` to the `Ressource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `universite_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ressource` ADD COLUMN `universite_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `universite`,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `universite_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Universite` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NULL,
    `ville` VARCHAR(191) NOT NULL,
    `pays` VARCHAR(191) NOT NULL,
    `site_web` VARCHAR(191) NULL,
    `date_creation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `adresse_blockchain` VARCHAR(191) NULL,
    `est_active` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Universite_nom_key`(`nom`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_universite_id_fkey` FOREIGN KEY (`universite_id`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ressource` ADD CONSTRAINT `Ressource_universite_id_fkey` FOREIGN KEY (`universite_id`) REFERENCES `Universite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
