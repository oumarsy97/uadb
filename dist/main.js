"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const dotenv = require("dotenv");
async function bootstrap() {
    dotenv.config();
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    console.log("Environment:", process.env.NODE_ENV);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const host = process.env.NODE_ENV === 'development' ? '0.0.0.0' : 'localhost';
    const port = process.env.MICROSERVICE_PORT ? +process.env.MICROSERVICE_PORT : 4000;
    console.log(`Configuration microservice: ${host}:${port}`);
    app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: {
            host: host,
            port: port,
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    await app.startAllMicroservices();
    console.log(`Microservice démarré sur ${host}:${port}`);
    const httpPort = process.env.HTTP_PORT || 4000;
    await app.listen(httpPort, '0.0.0.0');
    console.log(`HTTP Server démarré sur 0.0.0.0:${httpPort}`);
}
bootstrap().catch(err => {
    console.error('Erreur au démarrage:', err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map