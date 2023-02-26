import { useState } from 'react';

export const useAntiquityModal = () => {
  const [isAntiquityModalOpen, setIsAntiquityModalOpen] = useState(false)

  const handleToggleAntiquityModal = () => {
    setIsAntiquityModalOpen( prev => !prev )
  }

  return {
    isAntiquityModalOpen,
    handleToggleAntiquityModal
  }
}


