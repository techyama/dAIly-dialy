import { Body, Controller, Post } from '@nestjs/common';
import { DiaryService } from './diary.service';
import { RequestDto } from './request.dto';

@Controller('diary')
export class DiaryController {

  constructor(
    private readonly diaryService: DiaryService
  ) {}

  @Post('/register')
  translate( @Body() req: RequestDto ) {
    return this.diaryService.sendContent(req);
  }
}
