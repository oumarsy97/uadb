"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendEmpruntDto = exports.ReturnEmpruntDto = exports.CreateEmpruntDto = void 0;
class CreateEmpruntDto {
    exemplaireIds;
    userId;
    empreunteurId;
    dureeEmprunt;
    universiteEmprunteur;
}
exports.CreateEmpruntDto = CreateEmpruntDto;
class ReturnEmpruntDto {
    empruntId;
    exemplaireIds;
    commentaire;
    nouvelEtat;
}
exports.ReturnEmpruntDto = ReturnEmpruntDto;
class ExtendEmpruntDto {
    empruntId;
    nouvelleDuree;
    motif;
}
exports.ExtendEmpruntDto = ExtendEmpruntDto;
//# sourceMappingURL=create-emprunte.dto.js.map