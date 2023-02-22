import { useState } from 'react';

export const UsePriceModal = () => {
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false)

  const handleTogglePriceModal = () => {
    setIsPriceModalOpen( prev => !prev )
  }

  return {
    isPriceModalOpen,
    handleTogglePriceModal
  }
}


