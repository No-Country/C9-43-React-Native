import { useState } from 'react';

export const useLogOutModal = () => {
  const [ isLogOutModalOpen, setIsLogOutModalOpen ] = useState(false);
  
  const handleToggleLogOutModal = () => {
    setIsLogOutModalOpen( prev => !prev );
  }
  
  return {
    isLogOutModalOpen,
    handleToggleLogOutModal
  }
}

