import { useState } from 'react';

export const useFaqOptions = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isPublishOpen, setIsPublishOpen] = useState(false)

  const handleRegisterOpen = () => {
    setIsRegisterOpen(prev => !prev)
    isFilterOpen && handleFilterOpen()
    isContactOpen && handleContactOpen()
    isPublishOpen && handlePublishOpen()
    
  }

  const handleFilterOpen = () => {
    setIsFilterOpen(prev => !prev)
    isRegisterOpen && handleRegisterOpen()
    isContactOpen && handleContactOpen()
    isPublishOpen && handlePublishOpen()
  }

  const handleContactOpen = () => {
    setIsContactOpen(prev => !prev)
    isRegisterOpen && handleRegisterOpen()
    isFilterOpen && handleFilterOpen()
    isPublishOpen && handlePublishOpen()
  }

  const handlePublishOpen = () => {
    setIsPublishOpen(prev => !prev)
    isRegisterOpen && handleRegisterOpen()
    isFilterOpen && handleFilterOpen()
    isContactOpen && handleContactOpen()
  }


  return {
    isRegisterOpen,
    handleRegisterOpen,
    isFilterOpen,
    handleFilterOpen,
    isContactOpen,
    handleContactOpen,
    isPublishOpen,
    handlePublishOpen
  }
}


