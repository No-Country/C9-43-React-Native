import { useState } from 'react';

export const UseEnvironmentModal = () => {
  const [isEnvironmentModalOpen, setIsEnvironmentModalOpen] = useState(false)

  const handleToggleEnvironmentModal = () => {
    setIsEnvironmentModalOpen( prev => !prev )
  }

  return {
    isEnvironmentModalOpen,
    handleToggleEnvironmentModal
  }
}


