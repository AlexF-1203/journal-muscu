import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.firebaseApiKey,
  authDomain: Constants.expoConfig.extra.firebaseAuthDomain,
  projectId: Constants.expoConfig.extra.firebaseProjectId,
  storageBucket: Constants.expoConfig.extra.firebaseStorageBucket,
  messagingSenderId: Constants.expoConfig.extra.firebaseMessagingSenderId,
  appId: Constants.expoConfig.extra.firebaseAppId,
};

try {
  console.log('Initialisation de Firebase...');
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialisé avec succès');

  console.log('Initialisation de Auth...');
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
  console.log('Auth initialisé avec succès');

  console.log('Initialisation de Firestore...');
  const db = getFirestore(app);
  console.log('Firestore initialisé avec succès');

  export { auth, db };
} catch (error) {
  console.error('Erreur lors de l\'initialisation de Firebase:', error);
  throw error;
}