import { useState } from "react";

export const useOrderBy = () => {
  const [isRelevant, setIsRelevant] = useState(false)
  const [isExpensive, setIsExpensive] = useState(false)
  const [isCheap, setIsCheap] = useState(false)
  const [isNew, setIsNew] = useState(false)

  const handleIsRelevant = () => {
    setIsRelevant(prev => !prev)
    isExpensive && handleIsExpensive()
    isCheap && handleIsCheap()
    isNew && handleIsNew()
  }

  const handleIsExpensive = () => {
    setIsExpensive(prev => !prev)
    isRelevant && handleIsRelevant()
    isCheap && handleIsCheap()
    isNew && handleIsNew()
  }

  const handleIsCheap = () => {
    setIsCheap(prev => !prev)
    isRelevant && handleIsRelevant()
    isExpensive && handleIsExpensive()
    isNew && handleIsNew()
  }

  const handleIsNew = () => {
    setIsNew(prev => !prev)
    isRelevant && handleIsRelevant()
    isExpensive && handleIsExpensive()
    isCheap && handleIsCheap()
  }

  return {
    isRelevant,
    handleIsRelevant,
    isExpensive,
    handleIsExpensive,
    isCheap,
    handleIsCheap,
    isNew,
    handleIsNew
  }
}
