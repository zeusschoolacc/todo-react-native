import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '@/components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function profile() {
  const router = useRouter();

  const [name, setName] = useState('Loading...');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const storedName = await AsyncStorage.getItem('user_name');
        
        if (storedName) {
          setName(storedName);
        }
      }
      catch(error) {
        console.error('Error fetching name from AsyncStorage:', error);
      }
    }

    fetchUserName();
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/pfp.jpg')} // Replace with actual image path
              style={styles.image}
              resizeMode="contain"
            />
        </View>

        <Text style={styles.text}>{name}</Text>

        <TouchableOpacity style={styles.signOutButton} 
        onPress={() => router.replace('/')}
        >
          <Text style={styles.signOutText}>SIGN OUT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFC6D0',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    padding: 10,
    backgroundColor: '#F8739A',
    borderRadius: 9999,  // ✅ Large numeric value for full rounding
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150  // ✅ Half of width/height for perfect circle
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  signOutButton: {
    width: '100%',
    backgroundColor: '#F8739A',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  signOutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});