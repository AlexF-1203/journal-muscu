import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (!auth) {
        throw new Error('Firebase Auth n\'est pas initialisé');
      }

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      }, (error) => {
        console.error('Erreur Auth:', error);
        setError(error.message);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.error('Erreur dans AuthProvider:', error);
      setError(error.message);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};