import { useState } from 'react';

export const useModal = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  
  const handleToggleModal = () => {
    setIsModalOpen( prev => !prev );
  }
  
  return {
    isModalOpen,
    handleToggleModal
  }
}

