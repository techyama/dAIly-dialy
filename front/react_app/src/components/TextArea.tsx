import React from 'react';

interface TextAreaProps {
  text: string;
  label: string;
  setText: (text: string) => void;
  readOnly?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ text, label, setText, readOnly = false }) => {
  return (
    <div className="flex flex-col flex-1 mx-2">
      <label className="mb-2 text-2xl font-bold">{label}</label>
      <textarea
        value={text} 
        onChange={(e) => setText(e.target.value)}
        readOnly={readOnly}
        className="p-2 border rounded-md text-lg h-40 resize-none"
      />
    </div>
  );
}

export default TextArea;
