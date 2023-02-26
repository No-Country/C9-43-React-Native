import * as ImagePicker from 'expo-image-picker'

export const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    aspect: [4,2],
    allowsEditing: true,
    quality: 1,
  })

  if (!result.canceled) {
    // console.log(result.assets[0].uri)
    const source = { uri: result.assets[0].uri }
    console.log(source)
    return source
    alert('Upload succesful')
  } else {
    alert('You did not select any image.')
  }
}