import { useState } from 'react';

export const useOrderByModal = () => {
  const [isOrderByModalOpen, setIsOrderByModalOpen] = useState(false)

  const handleToggleOrderByModal = () => {
    setIsOrderByModalOpen( prev => !prev )
  }

  return {
    isOrderByModalOpen,
    handleToggleOrderByModal
  }
}


