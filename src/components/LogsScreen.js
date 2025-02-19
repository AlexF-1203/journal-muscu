import React, { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function LogsScreen() {
  const [logs, setLogs] = useState([]);

  const readLogs = async () => {
    try {
      const logFile = FileSystem.documentDirectory + 'logs.txt';
      const content = await FileSystem.readAsStringAsync(logFile);
      setLogs(content.split('\n'));
    } catch (error) {
      console.error('Error reading logs:', error);
    }
  };

  return (
    <ScrollView>
      <Button title="Actualiser les logs" onPress={readLogs} />
      {logs.map((log, index) => (
        <Text key={index}>{log}</Text>
      ))}
    </ScrollView>
  );
} 