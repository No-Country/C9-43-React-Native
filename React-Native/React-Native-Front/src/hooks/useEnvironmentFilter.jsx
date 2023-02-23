import { useState } from "react";

export const useEnvironmentFilter = () => {
  const [isOneSelected, setIsOneSelected] = useState(false)
  const [isTwoSelected, setIsTwoSelected] = useState(false)
  const [isThreeSelected, setIsThreeSelected] = useState(false)
  const [isFourSelected, setIsFourSelected] = useState(false)
  const [isFiveMoreSelected, setIsFiveMoreSelected] = useState(false)

  const handleIsOneSelected = () => {
    setIsOneSelected(prev => !prev)
    isTwoSelected && handleIsTwoSelected()
    isThreeSelected && handleIsThreeSelected()
    isFourSelected && handleIsFourSelected()
    isFiveMoreSelected && handleIsFiveMoreSelected()
  }

  const handleIsTwoSelected = () => {
    setIsTwoSelected(prev => !prev)
    isOneSelected && handleIsOneSelected()
    isThreeSelected && handleIsThreeSelected()
    isFourSelected && handleIsFourSelected()
    isFiveMoreSelected && handleIsFiveMoreSelected()
  }

  const handleIsThreeSelected = () => {
    setIsThreeSelected(prev => !prev)
    isOneSelected && handleIsOneSelected()
    isTwoSelected && handleIsTwoSelected()
    isFourSelected && handleIsFourSelected()
    isFiveMoreSelected && handleIsFiveMoreSelected()
  }

  const handleIsFourSelected = () => {
    setIsFourSelected(prev => !prev)
    isOneSelected && handleIsOneSelected()
    isTwoSelected && handleIsTwoSelected()
    isThreeSelected && handleIsThreeSelected()
    isFiveMoreSelected && handleIsFiveMoreSelected()
  }

  const handleIsFiveMoreSelected = () => {
    setIsFiveMoreSelected(prev => !prev)
    isOneSelected && handleIsOneSelected()
    isTwoSelected && handleIsTwoSelected()
    isThreeSelected && handleIsThreeSelected()
    isFourSelected && handleIsFourSelected()
  }

  return {
    isOneSelected,
    handleIsOneSelected,
    isTwoSelected,
    handleIsTwoSelected,
    isThreeSelected,
    handleIsThreeSelected,
    isFourSelected,
    handleIsFourSelected,
    isFiveMoreSelected,
    handleIsFiveMoreSelected
  }
}
