// APIリクエスト用型定義
export class GptDto {
  model: string;
  messages: {
    role: string;
    content: string;
  }[];
}

export class DiaryDto {
  user_id: number;
  title?: string;
  content: string;
}