import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";

export const fonts = {
  'Helvetica Now Display': require('./assets/fonts/Helvetica Now Display.otf'),
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fonts);

  if (fontError) {
    console.warn('fontError', fontError);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Helvetica Now Display',
  }
});
