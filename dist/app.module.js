"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const utilisateurs_module_1 = require("./users/utilisateurs.module");
const ressources_module_1 = require("./ressources/ressources.module");
const interactions_module_1 = require("./interactions/interactions.module");
const collections_module_1 = require("./collections/collections.module");
const universite_module_1 = require("./universite/universite.module");
const convention_module_1 = require("./convention/convention.module");
const etudiant_module_1 = require("./etudiant/etudiant.module");
const categorie_module_1 = require("./categorie/categorie.module");
const ufr_module_1 = require("./ufr/ufr.module");
const departement_module_1 = require("./departement/departement.module");
const filiere_module_1 = require("./filiere/filiere.module");
const email_module_1 = require("./meservices/mail/email.module");
const notification_module_1 = require("./notification/notification.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            utilisateurs_module_1.UtilisateursModule,
            ressources_module_1.RessourcesModule,
            interactions_module_1.InteractionsModule,
            collections_module_1.CollectionsModule,
            universite_module_1.UniversiteModule,
            convention_module_1.ConventionModule,
            etudiant_module_1.EtudiantModule,
            categorie_module_1.CategorieModule,
            ufr_module_1.UfrModule,
            departement_module_1.DepartementModule,
            filiere_module_1.FiliereModule,
            email_module_1.EmailModule,
            notification_module_1.NotificationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map