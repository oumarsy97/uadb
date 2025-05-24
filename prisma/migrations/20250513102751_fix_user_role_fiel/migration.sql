/*
  Warnings:

  - You are about to drop the column `niveau_etudes` on the `User` table. All the data in the column will be lost.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_niveau_etudes_idx` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `niveau_etudes`,
    ADD COLUMN `role` ENUM('ETUDIANT', 'ENSEIGNANT', 'CHERCHEUR', 'BIBLIOTHECAIRE', 'ADMIN') NOT NULL;

-- CreateIndex
CREATE INDEX `User_role_idx` ON `User`(`role`);
