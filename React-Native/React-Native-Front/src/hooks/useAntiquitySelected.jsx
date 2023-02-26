import { useState } from "react";


export const useAntiquitySelected = () => {
  const [isBrandNewSelected, setIsBrandNewSelected] = useState(false)
  const [isUsedSelected, setIsUsedSelected] = useState(false)
  
  const handleBrandNewSelected = () => {
    setIsBrandNewSelected(prev => !prev)
    isUsedSelected && handleUsedSelected()
  }
  
  const handleUsedSelected = () => {
    setIsUsedSelected(prev => !prev)
    isBrandNewSelected && handleBrandNewSelected()
  }

  return {
    isBrandNewSelected,
    isUsedSelected,
    handleBrandNewSelected,
    handleUsedSelected
  }
}
