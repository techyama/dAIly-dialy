import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DiaryService } from './diary.service';
import { DiaryDto, GptDto } from './request.dto';

@Controller('diary')
export class DiaryController {

  constructor(
    private readonly diaryService: DiaryService
  ) {}

  // 一覧取得
  @Get('/')
  getAllDiarys() {
    return this.diaryService.getAllDiarys({});
  }

  // 詳細取得
  @Get('/:id')
  getDiary( @Param('id') id: string) {
    return this.diaryService.getDiary({ id: Number(id)});
  }

  // 登録
  @Post('register')
  translate( @Body() req: { diaryData: DiaryDto, reqToGpt: GptDto} ) {
    const { diaryData, reqToGpt } = req;
    
    return this.diaryService.sendContent(diaryData, reqToGpt);
  }

  // 更新
  @Put('/:id')
  updatediary( @Param('id') id: string, @Body() req: DiaryDto ) {
    return this.diaryService.updateDiary({ where:{ id: Number(id) }, data: req});
  }
 
  // 削除
  @Delete('/:id')
  deleteDiary( @Param('id') id: string ) {
    return this.diaryService.deleteDiary({ id: Number(id) });
  }
}
