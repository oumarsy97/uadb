import { JwtService } from '@nestjs/jwt';
export declare class JwtHelperService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    extractUserIdFromToken(token: string): string;
    extractUserDataFromToken(token: string): any;
    isTokenValid(token: string): boolean;
    extractUserRoleFromToken(token: string): string | null;
}
