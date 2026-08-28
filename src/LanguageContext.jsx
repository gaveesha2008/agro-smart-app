import React, { createContext, useContext, useState } from 'react';

// Named export එක
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('English');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// අමතර ආරක්ෂාවක් ලෙස Default export එක එකතු කිරීම
export default LanguageContext;