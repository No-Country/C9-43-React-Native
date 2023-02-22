import { useState } from 'react';

export const useLanguageModal = () => {
  const [ isLanguageModalOpen, setIsLanguageModalOpen ] = useState(false);
  
  const handleToggleLanguageModal = () => {
    setIsLanguageModalOpen( prev => !prev );
  }
  
  return {
    isLanguageModalOpen,
    handleToggleLanguageModal
  }
}