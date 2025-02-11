import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BoutonCompteur = () => {
  const [compteur, setCompteur] = useState(0);

  const handleClick = () => {
    setCompteur(compteur + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Compteur: {compteur}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleClick}
      >
        <Text style={styles.buttonText}>Cliquez-moi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    minWidth: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BoutonCompteur; 