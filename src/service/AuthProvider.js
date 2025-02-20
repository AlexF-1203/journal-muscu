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
    let unsubscribe;
    try {
      if (auth) {
        unsubscribe = onAuthStateChanged(auth, async (user) => {
          try {
            if (user) {
              await logMessage('User authenticated', {
                userId: user.uid,
                email: user.email
              });
            }
            setUser(user);
            setLoading(false);
          } catch (error) {
            await logError(error, {
              context: 'AuthProvider.onAuthStateChanged',
              userId: user?.uid
            });
            setError(error.message);
            setLoading(false);
          }
        });
      }
    } catch (error) {
      logError(error, {
        context: 'AuthProvider.useEffect'
      });
      setError(error.message);
      setLoading(false);
    }

    return () => unsubscribe && unsubscribe();
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