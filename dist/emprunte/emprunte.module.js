"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprunteModule = void 0;
const common_1 = require("@nestjs/common");
const emprunte_service_1 = require("./emprunte.service");
const emprunte_controller_1 = require("./emprunte.controller");
const jwt_1 = require("@nestjs/jwt");
let EmprunteModule = class EmprunteModule {
};
exports.EmprunteModule = EmprunteModule;
exports.EmprunteModule = EmprunteModule = __decorate([
    (0, common_1.Module)({
        controllers: [emprunte_controller_1.EmprunteController],
        providers: [emprunte_service_1.EmprunteService, jwt_1.JwtService],
    })
], EmprunteModule);
//# sourceMappingURL=emprunte.module.js.map