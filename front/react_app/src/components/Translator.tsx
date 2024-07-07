import React, { useState } from "react";
import { translateText } from "../features/translate/TranslateApi";
import TextArea from "./TextArea";

const Translator: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');

  const handleTranslate = async () => {
    await translateText(inputText, setOutputText);
  };

  return (
    <div className="w-full max-w-6xl max-h-60 mt-10 p-4">
      <div className="flex mb-4">
        <TextArea
          text={inputText}
          label="Input Text (Japanese)"
          setText={setInputText}
        />
        <TextArea
          // text={translatedText}
          text={outputText}
          label="Output Text (English)"
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
