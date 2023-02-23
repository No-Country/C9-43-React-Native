import { useState } from "react";


export const useGarageSelected = () => {
  const [isGarageSelected, setIsGarageSelected] = useState(false)
  const [isGarageNotSelected, setIsGarageNotSelected] = useState(false)
  
  const handleGarageSelected = () => {
    setIsGarageSelected(prev => !prev)
    isGarageNotSelected && handleGarageNotSelected()
  }
  
  const handleGarageNotSelected = () => {
    setIsGarageNotSelected(prev => !prev)
    isGarageSelected && handleGarageSelected()
  }

  return {
    isGarageSelected,
    isGarageNotSelected,
    handleGarageSelected,
    handleGarageNotSelected
  }
}
