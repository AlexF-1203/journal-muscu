import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
  authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain,
  projectId: Constants.expoConfig?.extra?.firebaseProjectId,
  storageBucket: Constants.expoConfig?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.firebaseMessagingSenderId,
  appId: Constants.expoConfig?.extra?.firebaseAppId,
};

let app;
let auth;
let db;

try {
  // Initialiser Firebase
  app = initializeApp(firebaseConfig);
  
  // Initialiser Auth avec persistence
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
  
  // Initialiser Firestore
  db = getFirestore(app);
  
} catch (error) {
  console.error('Erreur d\'initialisation Firebase:', error);
}

export { auth, db };