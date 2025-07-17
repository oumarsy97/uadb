"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdministrateurDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_administrateur_dto_1 = require("./create-administrateur.dto");
class UpdateAdministrateurDto extends (0, swagger_1.PartialType)(create_administrateur_dto_1.CreateAdministrateurDto) {
}
exports.UpdateAdministrateurDto = UpdateAdministrateurDto;
//# sourceMappingURL=update-administrateur.dto.js.map