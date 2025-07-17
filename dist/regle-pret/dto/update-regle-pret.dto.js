"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReglePretDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_regle_pret_dto_1 = require("./create-regle-pret.dto");
class UpdateReglePretDto extends (0, mapped_types_1.PartialType)(create_regle_pret_dto_1.CreateReglePretDto) {
    id;
}
exports.UpdateReglePretDto = UpdateReglePretDto;
//# sourceMappingURL=update-regle-pret.dto.js.map