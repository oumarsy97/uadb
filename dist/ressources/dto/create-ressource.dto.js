"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRessourceDto = exports.UpdateRessourceDto = exports.CreateRessourceDto = void 0;
class CreateRessourceDto {
    titre;
    description;
    type;
    langue;
    urlFichier;
    format;
    motsCles;
    auteurId;
    universiteId;
    image;
    niveauAcces;
    nomAuteurExterne;
    prenomAuteurExterne;
    affiliationAuteurExterne;
    urlFichierLocal;
}
exports.CreateRessourceDto = CreateRessourceDto;
class UpdateRessourceDto {
    titre;
    description;
    type;
    langue;
    urlFichier;
    format;
    estPublique;
    motsCles;
    auteurId;
    universiteId;
    image;
    niveauAcces;
    estValide;
    estArchive;
    nomAuteurExterne;
    prenomAuteurExterne;
    affiliationAuteurExterne;
}
exports.UpdateRessourceDto = UpdateRessourceDto;
class SearchRessourceDto {
    page;
    limit;
    search;
    type;
    langue;
    universiteId;
    estPublique;
    niveauAcces;
    estValide;
    estArchive;
    auteurId;
    orderBy;
    orderDirection;
}
exports.SearchRessourceDto = SearchRessourceDto;
//# sourceMappingURL=create-ressource.dto.js.map