import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getDefaultErrorMap } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import crashlytics from '@react-native-firebase/crashlytics';

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.firebaseApiKey,
  authDomain: Constants.expoConfig.extra.firebaseAuthDomain,
  projectId: Constants.expoConfig.extra.firebaseProjectId,
  storageBucket: Constants.expoConfig.extra.firebaseStorageBucket,
  messagingSenderId: Constants.expoConfig.extra.firebaseMessagingSenderId,
  appId: Constants.expoConfig.extra.firebaseAppId,
  measurementId: Constants.expoConfig.extra.firebaseMeasurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth and Firestore instances
export const auth = initializeAuth(app, {
  persistence: __DEV__ ? getReactNativePersistence(AsyncStorage) : undefined,
  errorMap: getDefaultErrorMap(/* enableDebugLogging */ true)
});
export const db = getFirestore(app);

export const initCrashlytics = async () => {
  await crashlytics().setCrashlyticsCollectionEnabled(true);
  
  // Log des informations utilisateur (optionnel)
  crashlytics().setUserId('USER_ID');
  crashlytics().setAttribute('role', 'admin');
};

export const logError = async (error, extraData = {}) => {
  crashlytics().log('Error occurred: ' + error.message);
  
  // Ajoutez des données supplémentaires
  Object.entries(extraData).forEach(([key, value]) => {
    crashlytics().setAttribute(key, String(value));
  });
  
  // Enregistrez l'erreur
  await crashlytics().recordError(error);
};

export default app; 