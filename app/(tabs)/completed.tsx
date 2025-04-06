import Button from '@/components/Button'
import Header from '@/components/Header';
import Task from '@/components/Task';
import { useRouter } from 'expo-router';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const completed = () => {
    const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Header title='COMPLETED'/>

        <View style={styles.tasks}>
            <Task name='Task #1' isCompleted/>
            <Task name='Task #2' isCompleted/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFC6D0',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tasks: {
    flexDirection: 'column',
    gap: 10,
    width: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#F8739A',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default completed