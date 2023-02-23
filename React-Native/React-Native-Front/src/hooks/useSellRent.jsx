import { useState } from "react"

export const useSellRent = () => {
  const [isSellSelected, setIsSellSelected] = useState(false);   
  const [isRentSelected, setIsRentSelected] = useState(false);

  const handleSellSelected = () => {
    setIsSellSelected(prev => !prev)
    isRentSelected && setIsRentSelected()
  }

  const handleRentSelected = () => {
    setIsRentSelected(prev => !prev)
    isSellSelected && setIsSellSelected()
  }

  return {
    isSellSelected,
    isRentSelected,
    handleRentSelected,
    handleSellSelected
  }
}


