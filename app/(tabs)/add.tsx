import Button from '@/components/Button'
import Header from '@/components/Header';
import Input from '@/components/Input';
import Task from '@/components/Task';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const add = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    const router = useRouter();

    const handleAddTask = async () => {
        if (!title || !details) {
            Alert.alert('Error', 'Please fill out all fields.');
            return;
        }

        const user_id = localStorage.getItem('user_id');

        try {
            const response = await fetch(`https://todo-list.dcism.org/addItem_action.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    item_name: title,
                    item_description: details,
                    user_id 
                }),
            });

            const data = await response.json()

            if (data.status !== 200) {
                Alert.alert('Error', data.message || 'Failed to add task.');
                return;
            }

            Alert.alert('Success', 'Task added successfully!');
            router.push('/todo'); 
        } catch (error: any) {
            console.error('Add Task Error:', error);
            Alert.alert('Error', error.message || 'Failed to add task.');
        }
    };


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Header title='ADD'/>

        <Input
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          autoCapitalize="none"
        />

        <Input
          editable
          multiline
          numberOfLines={8}
          placeholder='Details'
          maxLength={40}
          onChangeText={setDetails}
          value={details}
        />

        <Button 
          label="ADD TASK"
          color="#F8739A"
          style={styles.button}
          onPress={handleAddTask}
        />
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
      },
});

export default add