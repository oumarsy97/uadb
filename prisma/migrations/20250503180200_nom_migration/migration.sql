-- AlterTable
ALTER TABLE `Ressource` ADD COLUMN `url_fichier_local` VARCHAR(191) NULL DEFAULT 'file:///tmp/ressource.pdf',
    MODIFY `est_publique` BOOLEAN NOT NULL DEFAULT false;
