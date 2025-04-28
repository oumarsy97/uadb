"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionsModule = void 0;
const common_1 = require("@nestjs/common");
const favoris_module_1 = require("./favoris/favoris.module");
const commentaires_module_1 = require("./commentaires/commentaires.module");
const notations_module_1 = require("./notations/notations.module");
const historique_acces_module_1 = require("./historique-acces/historique-acces.module");
let InteractionsModule = class InteractionsModule {
};
exports.InteractionsModule = InteractionsModule;
exports.InteractionsModule = InteractionsModule = __decorate([
    (0, common_1.Module)({
        imports: [favoris_module_1.FavorisModule, commentaires_module_1.CommentairesModule, notations_module_1.NotationsModule, historique_acces_module_1.HistoriqueAccesModule]
    })
], InteractionsModule);
//# sourceMappingURL=interactions.module.js.map