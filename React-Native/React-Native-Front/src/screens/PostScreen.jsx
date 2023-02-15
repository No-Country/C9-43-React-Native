import { useState } from "react"
import { PostModal } from "../components/modal"
import { useModal } from "../hooks"
import { CharacteristicsScreen, ContactScreen, DescriptionScreen, EnvironmentsScreen, LocationScreen, Phase1Screen, Phase2Screen, Phase3Screen, Phase4Screen, PriceScreen } from "./PostScreens"
import { PhotosScreen } from "./PostScreens/PhotosScreen"

export const PostScreen = () => {

  const { isModalOpen, handleToggleModal } = useModal();

  return (
    <>
      <ContactScreen />

      <PostModal 
        isModalOpen={ isModalOpen }
        handleToggleModal={ handleToggleModal }
      />
    </>
  )
}
