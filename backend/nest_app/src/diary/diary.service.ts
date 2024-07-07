import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { RequestDto } from './request.dto';
import { GPTAPI, GPTMODEL, GPTKEY } from 'src/secret';

@Injectable()
export class DiaryService {

  constructor(
    private readonly httpService: HttpService
  ) {}

  async sendContent(req: RequestDto) {
    // 使用モデルの指定
    req.model = GPTMODEL;
    return await this.httpService.post(GPTAPI,
      req, {
        // 送信する HTTP ヘッダー(認証情報)
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GPTKEY}`
        }
      })
      .pipe(
        map((res) => {
          // 回答の取得
          return res.data.choices[0].message.content;
        })
        )
        .pipe(
        catchError(() => {
          throw new ForbiddenException(`API not available`);
        })
      );
  };
}
