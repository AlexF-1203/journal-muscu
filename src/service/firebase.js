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
  console.log('Début initialisation Firebase');
  
  if (!app) {
    app = initializeApp(firebaseConfig);
    console.log('App Firebase initialisée');
    
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });
    console.log('Auth Firebase initialisée');
    
    db = getFirestore(app);
    console.log('Firestore initialisé');
  }
} catch (error) {
  console.error('Erreur détaillée Firebase:', error);
  console.error('Stack trace:', error.stack);
  // Ne pas throw l'erreur pour éviter le crash
  console.error('Erreur initialisation Firebase mais continuation de l\'app');
}

export { auth, db };