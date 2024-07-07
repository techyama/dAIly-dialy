import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { RequestDto } from './request.dto';
import { DEEPLAPI, DEEPLKEY } from 'src/secret';

@Injectable()
export class TranslateService {

  constructor(
    private readonly httpService: HttpService
  ) {}

  async translate(req: RequestDto) {
    return await this.httpService.post(DEEPLAPI,
      req, {
        // 送信する HTTP ヘッダー(認証情報)
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `DeepL-Auth-Key ${DEEPLKEY}`
        }
      })
      .pipe(
        map((res) => {
          // 結果の取得
          return res.data.translations[0].text
        })
        )
        .pipe(
        catchError(() => {
          throw new ForbiddenException(`API not available`);
        })
      );
  };
}
