import { Module } from '@nestjs/common';
import { DiaryController } from './diary.controller';
import { DiaryService } from './diary.service';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from './../prisma.module';

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [DiaryController],
  providers: [DiaryService, Object]
})
export class DiaryModule {}
