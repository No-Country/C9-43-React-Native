import { useEffect, useState } from 'react';

//TODO mejorar los estados, quizas unificarlos a todos?

export const useFilters = () => {
  const [operationBg, setOperationBg] = useState('')
  const [typeOfPropertyBg, setTypeOfPropertyBg] = useState('')
  const [lastFilters, setLastFilters] = useState({
    price: '',
    area: '',
    environments: ''
  })

  const handleOperationBg = (string) => {
    setOperationBg(string)
  }
  const handleTypeOfPropertyBg = (string) => {
    setTypeOfPropertyBg(string)
  }

  const handleCleanSelections = () => {
    setOperationBg('')
    setTypeOfPropertyBg('')
    setLastFilters({
      price: '',
      area: '',
      environments: ''
    })
  }

  const handleLastFilters = (key, value) => {
    setLastFilters({...lastFilters, [key]: value})
  }

  return { operationBg, typeOfPropertyBg, handleOperationBg, handleTypeOfPropertyBg, handleCleanSelections, lastFilters, handleLastFilters }
}