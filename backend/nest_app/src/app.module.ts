import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiaryModule } from './diary/diary.module';
import { TranslateModule } from './translate/translate.module';

@Module({
  imports: [DiaryModule, TranslateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
