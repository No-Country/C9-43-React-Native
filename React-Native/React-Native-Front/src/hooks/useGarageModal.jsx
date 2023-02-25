import { useState } from 'react';

export const useGarageModal = () => {
  const [isGarageModalOpen, setIsGarageModalOpen] = useState(false)

  const handleToggleGarageModal = () => {
    setIsGarageModalOpen( prev => !prev )
  }

  return {
    isGarageModalOpen,
    handleToggleGarageModal
  }
}


