"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationsModule = void 0;
const common_1 = require("@nestjs/common");
const notations_controller_1 = require("./notations.controller");
const notations_service_1 = require("./notations.service");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma/prisma.service");
let NotationsModule = class NotationsModule {
};
exports.NotationsModule = NotationsModule;
exports.NotationsModule = NotationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [notations_controller_1.NotationsController],
        providers: [notations_service_1.NotationsService, jwt_1.JwtService, prisma_service_1.PrismaService]
    })
], NotationsModule);
//# sourceMappingURL=notations.module.js.map