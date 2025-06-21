"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const dotenv = require("dotenv");
async function bootstrap() {
    dotenv.config();
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    console.log("Environment:", process.env.NODE_ENV);
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: process.env.MICROSERVICE_PORT ? +process.env.MICROSERVICE_PORT : 4000,
        },
    });
    const port = process.env.MICROSERVICE_PORT || 4000;
    await app.listen();
    console.log(`✅ Microservice TCP pur démarré sur 0.0.0.0:${port}`);
    console.log(`🔗 Prêt à recevoir les connexions TCP`);
}
bootstrap().catch(err => {
    console.error('❌ Erreur au démarrage:', err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map