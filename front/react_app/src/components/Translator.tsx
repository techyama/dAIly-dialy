import React, { useState } from "react";
import { translateText } from "../features/translate/TranslateApi";
import TextArea from "./TextArea";
import ArrowButton from "./ArrowButton";

const Translator: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [isJapanese, setIsJapanese] = useState<boolean>(true);

  const labelText = (isInput: boolean) => {
    if (isInput) {
      return isJapanese ? 'Japanese' : 'English';
    } else {
      return !isJapanese ? 'Japanese' : 'English';
    }
  };

  const changeTarget = () => {
    // 翻訳対象を入れ替える
    const originalInputText = inputText;
    setInputText(outputText);
    setOutputText(originalInputText);
    setIsJapanese(!isJapanese);
  }

  const handleTranslate = async () => {
    await translateText(inputText, setOutputText, isJapanese);
  };

  return (
    <div className="w-full max-w-6xl max-h-60 mt-10 p-4">
      <div className="flex mb-4">
        <TextArea
          text={inputText}
          label={`Input Text (${labelText(true)})`}
          setText={setInputText}
        />
        <ArrowButton callback={changeTarget} />
        <TextArea
          text={outputText}
          label={`Output Text (${labelText(false)})`}
          setText={setOutputText}
          readOnly
        />
      </div>
      <div className="flex text-lg">
        <button
          onClick={handleTranslate}
          className="bg-cyan-800 text-white px-4 py-2 rounded shadow-md hover:bg-cyan-700"
        >
          Translate
        </button>
      </div>
    </div>
  );
}

export default Translator;
