import { Body, Controller, Post } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { RequestDto } from './request.dto';

@Controller('translate')
export class TranslateController {

  constructor(
    private readonly translateService: TranslateService
  ) {}

  @Post()
  translate( @Body() req: RequestDto ) {
    return this.translateService.translate(req);
  }
}
