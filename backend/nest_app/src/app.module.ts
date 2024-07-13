import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiaryModule } from './diary/diary.module';
import { TranslateModule } from './translate/translate.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [DiaryModule, TranslateModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
