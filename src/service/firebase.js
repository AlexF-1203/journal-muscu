import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: "AIzaSyAPB1N4uWgGnZ4zvwTzdlTath42EKpxGeM",
  authDomain: "journal-sportif.firebaseapp.com",
  projectId: "journal-sportif",
  storageBucket: "journal-sportif.firebasestorage.app",
  messagingSenderId: "490734071506",
  appId: "1:490734071506:web:1d9d3108f21abea0f5c70b"
};

let app;
let auth;
let db;

try {
  if (!app) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log('Firebase initialisé avec succès');
  }
} catch (error) {
  console.error('Erreur initialisation Firebase:', error);
  throw error;
}

export { auth, db };