import * as ImagePicker from 'expo-image-picker'

export const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    aspect: [4,2],
    allowsEditing: true,
    quality: 1,
  })

  if (!result.canceled) {
    const source = { uri: result.assets[0].uri }
    return source
  } else {
    alert('You did not select any image.')
  }
}