// APIリクエスト用型定義
export class RequestDto {
  model: string;
  message: {
    role: string;
    content: string;
  }[];
}