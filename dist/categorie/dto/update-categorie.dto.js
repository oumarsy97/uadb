"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategorieDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_categorie_dto_1 = require("./create-categorie.dto");
class UpdateCategorieDto extends (0, swagger_1.PartialType)(create_categorie_dto_1.CreateCategorieDto) {
}
exports.UpdateCategorieDto = UpdateCategorieDto;
//# sourceMappingURL=update-categorie.dto.js.map