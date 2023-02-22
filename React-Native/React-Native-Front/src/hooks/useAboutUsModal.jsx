import { useState } from 'react';

export const useAboutUsModal = () => {
  const [isAboutUsModalOpen, setIsAboutUsModalOpen] = useState(false)

  const handleToggleAboutUsModal = () => {
    setIsAboutUsModalOpen( prev => !prev )
  }

  return {
    isAboutUsModalOpen,
    handleToggleAboutUsModal
  }
}
