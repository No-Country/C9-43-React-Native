import { useState } from 'react';

export const useFilters = () => {
  const [operationBg, setOperationBg] = useState('')
  const [typeOfPropertyBg, setTypeOfPropertyBg] = useState('')

  const handleOperationBg = (string) => {
    setOperationBg(string)
  }
  const handleTypeOfPropertyBg = (string) => {
    setTypeOfPropertyBg(string)
  }

  const handleCleanSelections = () => {
    setOperationBg('')
    setTypeOfPropertyBg('')
  }
  
  return { operationBg, typeOfPropertyBg, handleOperationBg, handleTypeOfPropertyBg, handleCleanSelections }
}