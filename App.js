import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator, LogBox } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, AuthContext } from './src/service/AuthProvider';
import Home from './src/pages/Home';
import Login from './src/auth/Login';
import Register from './src/auth/Register';
import CreateSeance from './src/pages/CreateSeance';
import CreateSuivis from './src/pages/CreateSuivis';
import { initialiserExercices } from './src/data/initialExercises';
import { db } from './src/service/firebase';
import { initialiserFirestore } from './src/service/initializeFirestore';
import SeanceEnCours from './src/pages/SeanceEnCours';
import SeanceDetail from './src/pages/SeanceDetail';
import Performance from './src/pages/Performance';
import EditSeance from './src/pages/EditSeance';
import { COLORS } from './src/theme/colors';
import CreateExercice from './src/pages/CreateExercice';
import Constants from 'expo-constants';

const Stack = createNativeStackNavigator();

const AppContent = () => {
  const { user, loading } = React.useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.surface,
          },
          headerTintColor: COLORS.text.primary,
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          contentStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      >
        {user ? (
          <>
            <Stack.Screen 
              name="Home" 
              component={Home}
              options={{ 
                title: 'Mes Séances',
                headerLeft: () => null,
              }}
            />
            <Stack.Screen 
              name="CreateSeance" 
              component={CreateSeance}
              options={{ title: 'Nouvelle Séance' }}
            />
            <Stack.Screen 
              name="CreateSuivis" 
              component={CreateSuivis}
            />
            <Stack.Screen 
              name="SeanceDetail" 
              component={SeanceDetail}
              options={{ title: 'Détails de la Séance' }}
            />
            <Stack.Screen 
              name="SeanceEnCours" 
              component={SeanceEnCours}
              options={{ title: 'Séance en cours' }}
            />
            <Stack.Screen 
              name="Performance" 
              component={Performance}
              options={{ title: 'Performances' }}
            />
            <Stack.Screen 
              name="EditSeance" 
              component={EditSeance}
              options={{ title: 'Modifier la Séance' }}
            />
            <Stack.Screen 
              name="CreateExercice" 
              component={CreateExercice}
              options={{ title: 'Nouvel exercice' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen 
              name="Login" 
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Register" 
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const initialiserDonnees = async () => {
  try {
    await initialiserFirestore();
    console.log('Données initialisées avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des données:', error);
  }
};

LogBox.ignoreLogs([
  'Unable to load script',
  'Remote debugger',
]);

export default function App() {
  useEffect(() => {
    const initApp = async () => {
      try {
        await initialiserDonnees();
        console.log('Application initialisée avec succès');
      } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
      }
    };

    initApp();
  }, []);

  return (
    <AuthProvider>
      <AppContent />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
