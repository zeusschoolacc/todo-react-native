// components/LoadingScreen.tsx
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Image } from 'react-native';

export function LoadingScreen({ message = 'Loading…' }: { message?: string }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/signin-img.png')} // Replace with actual image path
        style={styles.image}
        resizeMode="contain"
      />

      <ActivityIndicator size={60} color={'#FF8AAE'}/>

      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC6D0',
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  }
});
