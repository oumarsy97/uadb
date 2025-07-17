"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBibliothecaireDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bibliothecaire_dto_1 = require("./create-bibliothecaire.dto");
class UpdateBibliothecaireDto extends (0, mapped_types_1.PartialType)(create_bibliothecaire_dto_1.CreateBibliothecaireDto) {
    id;
}
exports.UpdateBibliothecaireDto = UpdateBibliothecaireDto;
//# sourceMappingURL=update-bibliothecaire.dto.js.map