import { useState } from "react";

export const usePropertyType = () => {
  const [isApartmentSelected, setIsApartmentSelected] = useState(false)
  const [isHouseSelected, setIsHouseSelected] = useState(false);
  const [isLandSelected, setIsLandSelected] = useState(false);
  
  const handleIsApartmentSelected = () => {
    setIsApartmentSelected(prev => !prev)
    isHouseSelected && handleIsHouseSelected()
    isLandSelected && handleIsLandSelected()
  }

  const handleIsHouseSelected = () => {
    setIsHouseSelected(prev => !prev)
    isApartmentSelected && handleIsApartmentSelected()
    isLandSelected && handleIsLandSelected()
  }

  const handleIsLandSelected = () => {
    setIsLandSelected(prev => !prev)
    isApartmentSelected && handleIsApartmentSelected()
    isHouseSelected && handleIsHouseSelected()
  }

  return {
    isApartmentSelected,
    isHouseSelected,
    isLandSelected,
    handleIsApartmentSelected,
    handleIsHouseSelected,
    handleIsLandSelected
  }

} 