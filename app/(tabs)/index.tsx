import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function SignUpScreen() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const handleSignUp = async () => {
  //   if (!username || !email || !password || !confirmPassword) {
  //     Alert.alert('Error', 'Please fill out all fields.');
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     Alert.alert('Error', 'Passwords do not match!');
  //     return;
  //   }

  //   try {
  //     const userCredential = await signUpWithEmail(email, password);
  //     const user = userCredential.user;
  //     console.log('User created:', user);
  //     Alert.alert('Success', 'Account created!');
  //     router.push('/explore'); 
  //   } catch (error: any) {
  //     console.error('Signup Error:', error);
  //     Alert.alert('Error', error.message || 'Failed to sign up.');
  //   }
  // };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Image
          source={require('../../assets/images/signup-img.png')} 
          style={styles.image}
          resizeMode="contain"
        />

        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <Button
          label="SIGN UP"
          onPress={() => router.push('/todo')}
          color="#F8739A"
        />

        <Button
          label="SIGN IN"
          onPress={() => router.push('/signin')}
          color="#f9d1d8"
        />
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
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },
  signUpButton: {
    width: '100%',
    backgroundColor: '#F8739A',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#f9d1d8',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});