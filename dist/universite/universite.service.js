"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversiteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UniversiteService = class UniversiteService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUniversiteDto) {
        return this.prisma.universite.create({ data: createUniversiteDto });
    }
    async findAll(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const where = search ? { nom: { contains: search, mode: 'insensitive' } } : {};
        return this.prisma.universite.findMany({
            where,
            skip,
            take: limit,
        });
    }
    async findOne(id) {
        return this.prisma.universite.findUnique({ where: { id } });
    }
    async update(id, updateUniversiteDto) {
        return this.prisma.universite.update({ where: { id }, data: updateUniversiteDto });
    }
    async remove(id) {
        return this.prisma.universite.delete({ where: { id } });
    }
    async getStatistics(id) {
        return this.prisma.universite.findUnique({
            where: { id },
            include: { ressources: true, users: true },
        });
    }
    async toggleStatus(id) {
        const universite = await this.prisma.universite.findUnique({ where: { id } });
        if (!universite)
            throw new Error('Université non trouvée');
        return this.prisma.universite.update({
            where: { id },
            data: { estActive: !universite.estActive },
        });
    }
    async getTopUniversities(limit) {
        return this.prisma.universite.findMany({
            orderBy: { ressources: { _count: 'desc' } },
            take: 10,
        });
    }
};
exports.UniversiteService = UniversiteService;
exports.UniversiteService = UniversiteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UniversiteService);
//# sourceMappingURL=universite.service.js.map