import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import uuid  from 'react-native-uuid'

const firebaseConfig = {
  apiKey: "AIzaSyDRMUjSFHd2EtNBV2hXDoUaZQY_w2Ogv8c",
  authDomain: "home-quest-a812c.firebaseapp.com",
  projectId: "home-quest-a812c",
  storageBucket: "home-quest-a812c.appspot.com",
  messagingSenderId: "248895326243",
  appId: "1:248895326243:web:736631fc7e9bc842d8c996",
  storageBucket: "gs://home-quest-a812c.appspot.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage
const storage = getStorage(app)

// Reference to posts
const postsRef = ref(storage, 'posts/')

export const uploadPostsImages = async (arr) => {
  const urlArr = []
  arr.map(async (image) => {
    const response = await fetch(image.uri)
    const blob = await response.blob()
    
    const storageRef = ref(storage, uuid.v4())
    await uploadBytes(storageRef, blob)
    const url = await getDownloadURL(storageRef)
    urlArr.push(url)
  })
  return urlArr
}

export const uploadProfileImage = async (image) => {
  const response = await fetch(image.uri);
  const blob = await response.blob();

  const storageRef = ref(storage, 'profileImages/' + uuid.v4());
  await uploadBytes(storageRef, blob);
  const url = await getDownloadURL(storageRef);
  
  return url;
};