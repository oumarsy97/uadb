import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { EmprunteModule } from '../emprunte/emprunte.module';
import { EmprunteService } from 'src/emprunte/emprunte.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmailService } from 'src/meservices/mail/email.service';

@Module({
  imports: [EmprunteModule],
  providers: [TasksService, EmprunteService,PrismaService,EmailService],
})
export class TasksModule {}