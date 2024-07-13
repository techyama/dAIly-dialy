import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { DiaryDto, GptDto } from './request.dto';
import { GPTAPI, GPTMODEL, GPTKEY } from 'src/secret';
import { PrismaService } from 'src/prisma.service';
import { Diary, Prisma } from '@prisma/client';

@Injectable()
export class DiaryService {

  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService
  ) {}

  async sendContent(diaryData: DiaryDto, reqToGpt: GptDto) {
    // 使用モデルの指定
    reqToGpt.model = GPTMODEL;
    return await this.httpService.post(GPTAPI,
      reqToGpt, {
        // 送信する HTTP ヘッダー(認証情報)
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GPTKEY}`
        }
      })
      .pipe(
        map(async (res) => {
          const { user_id, title, content} = diaryData;
          this.createDiary({ title, content, User: {connect: { id: user_id}} });
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

  // 一覧取得
  async getAllDiarys(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DiaryWhereUniqueInput;
    where?: Prisma.DiaryWhereInput;
    orderBy?: Prisma.DiaryOrderByWithRelationInput;
  }): Promise<Diary[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.diary.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // 詳細取得
  async getDiary(diaryWhereUniqueInput: Prisma.DiaryWhereUniqueInput): Promise<Diary | null> {
    return this.prisma.diary.findUnique({
      where: diaryWhereUniqueInput,
    });
  }

  // 登録
  async createDiary (data: Prisma.DiaryCreateInput): Promise<Diary> {
    return await this.prisma.diary.create({ data });
  }

  // 更新
  async updateDiary (params: {
    where: Prisma.DiaryWhereUniqueInput;
    data: Prisma.DiaryUpdateInput;
  }): Promise<Diary> {
    const { where, data } = params;
    return await this.prisma.diary.update({ data, where });
  }

  // 削除
  async deleteDiary(where: Prisma.DiaryWhereUniqueInput): Promise<Diary> {
    return this.prisma.diary.delete({ where });
  }
}
