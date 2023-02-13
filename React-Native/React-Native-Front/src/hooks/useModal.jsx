import { useState } from 'react';

export const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false)
  
  const handleModalVisibility = () => {
    setModalVisible(!modalVisible)
  }
  
  return { modalVisible, handleModalVisibility }
}

