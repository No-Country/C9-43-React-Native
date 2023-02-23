import { useState } from 'react';

export const useLanguageSelection = () => {
  const [isSpanishSelected, setIsSpanishSelected] = useState(false);
  const [isEnglishSelected, setIsEnglishSelected] = useState(false);

  const handleIsSpanishSelected = () => {
    setIsSpanishSelected( prev => !prev );
    isEnglishSelected && handleIsEnglishSelected()
  }

  const handleIsEnglishSelected = () => {
    setIsEnglishSelected(prev => !prev)
    isSpanishSelected && handleIsSpanishSelected()
  }
  
  return {
    isSpanishSelected,
    isEnglishSelected,
    handleIsSpanishSelected,
    handleIsEnglishSelected
  }
}