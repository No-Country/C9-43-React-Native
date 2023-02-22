import { useState } from 'react';

export const UseAreaModal = () => {
  const [isAreaModalOpen, setIsAreaModalOpen] = useState(false)

  const handleToggleAreaModal = () => {
    setIsAreaModalOpen( prev => !prev )
  }

  return {
    isAreaModalOpen,
    handleToggleAreaModal
  }
}


