import { SetMetadata } from '@nestjs/common';
import { RoleUser as Role } from 'generated/prisma';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
