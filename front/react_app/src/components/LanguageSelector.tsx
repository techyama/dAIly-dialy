import React from 'react';

interface LanguageSelectorProps {
  language: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language }) => {
  return (
    <div className="flex flex-col">
      { language }
    </div>
  );
}

export default LanguageSelector;
