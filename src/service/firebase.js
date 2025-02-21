import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAPB1N4uWgGnZ4zvwTzdlTath42EKpxGeM",
  authDomain: "journal-sportif.firebaseapp.com",
  projectId: "journal-sportif",
  storageBucket: "journal-sportif.firebasestorage.app",
  messagingSenderId: "490734071506",
  appId: "1:490734071506:web:1d9d3108f21abea0f5c70b"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);