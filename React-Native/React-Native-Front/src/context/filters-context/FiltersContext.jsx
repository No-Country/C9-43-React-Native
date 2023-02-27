import { createContext, useState } from "react"

export const filtersInitialState = {
  operationType: '',
  propertyType: '',
  priceFrom: '',
  priceTo: '',
  areaFrom: '',
  areaTo: '',
  orderBy: '',
  ambiances: null,
  garage: null,
  antiquity: null
}

export const FiltersContext = createContext()

export const FiltersContextProvider = ({ children }) => {
  const [filters, setFilters] = useState(filtersInitialState)

  const handleFilters = (name, value) => {
    setFilters({...filters, [name]: value})
  }

  const handleCleanFilters = () => {
    setFilters(filtersInitialState)
  }

  const value = {filters, handleFilters, handleCleanFilters}

  return(
    <FiltersContext.Provider value={value}>
      { children }
    </FiltersContext.Provider>
  )
}