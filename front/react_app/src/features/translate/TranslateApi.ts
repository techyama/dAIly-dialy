import axios from "axios";
import { API_URL, TARGET_LANG } from "../constants"

const ENDPOINT = `${API_URL}/translate`;

export const translateText = async (entry: string, setText: (text: string) => void) => {
  await axios.post(ENDPOINT, {
    // 質問内容
    text: [
        entry
    ],
    target_lang: TARGET_LANG
  })
  .then(res => {
    // 翻訳結果をセット
    setText(res.data);
  });

};
