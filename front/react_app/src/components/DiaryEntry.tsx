import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { sendContent } from "../features/diary/diarySlice";

const DiaryEntry: React.FC = () => {
  const [diaryContent, setContent] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const dispatch = useAppDispatch();
  const flashMessage = useAppSelector((state) => state.diary.flashMessage);
  const status = useAppSelector((state) => state.diary.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendContent(diaryContent));
    setContent("");
    setCount(0);
  };

  const CountCheck = (m: string) => {
    // 空白、タブ、改行を除き単語ごとに配列に格納
    const spaces: RegExpMatchArray | null = m.match(/\S+/g);

    if (spaces !== null) {
      setCount(spaces.length);
    }else {
      setCount(0);
    }
  };

  const isCanSubmitting = (): boolean => {
    const baseNum: number = 20;

    // 処理中または入力文が30語未満の時
    // return status === "loading" || count < baseNum ? true : false;
    return false;
  };

  return (
    <>
      <div className="w-full max-w-4xl mt-40 p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-5">Let's write a diary! What happened today?</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full h-40 p-2 border border-gray-300 text-lg rounded mb-4"
            value={diaryContent}
            onChange={(e) => {
              setContent(e.target.value);
              CountCheck(e.target.value);
            }}
            disabled={status === "loading"}
            placeholder='Today is the day I started my "DAILY DIARY".
            I want to record my daily feelings and thoughts in English and expand my range of expression.
            I look forward to learning English in the future!'
          />
          <button
            type="submit"
            className="w-full bg-cyan-800 text-white text-lg py-2 rounded hover:bg-cyan-700 transition"
            disabled={isCanSubmitting()}
          >
            {status === "loading" ? "Registering..." : "Registration"}
          </button>
        </form>
        {flashMessage && <p className="mt-4 text-green-500">{flashMessage}</p>}
      </div>
      <p className="float-right">
        {count} word
      </p>
    </>
  );
};

export default DiaryEntry;
