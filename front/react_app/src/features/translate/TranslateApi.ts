import axios from "axios";
import { API_URL, TARGET_LANG_JAPAN, TARGET_LANG_US } from "../constants"

const ENDPOINT = `${API_URL}/translate`;

export const translateText = async (entry: string, setText: (text: string) => void, isJapanese: boolean) => {
  await axios.post(ENDPOINT, {
    // 質問内容
    text: [
        entry
    ],
    target_lang: isJapanese ? TARGET_LANG_US : TARGET_LANG_JAPAN
  })
  .then(res => {
    // 翻訳結果をセット
    setText(res.data);
  });

};
