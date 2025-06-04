"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEtudiantDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_etudiant_dto_1 = require("./create-etudiant.dto");
class UpdateEtudiantDto extends (0, swagger_1.PartialType)(create_etudiant_dto_1.CreateEtudiantDto) {
}
exports.UpdateEtudiantDto = UpdateEtudiantDto;
//# sourceMappingURL=update-etudiant.dto.js.map