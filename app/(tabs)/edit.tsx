import Button from '@/components/Button'
import Header from '@/components/Header';
import Input from '@/components/Input';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const edit = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Header title='EDIT'/>

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
          label="SAVE"
          color="#F8739A"
          style={styles.button}
          onPress={() => router.navigate('/todo')}
        />

        <Button 
          label="COMPLETE"
          color="green"
          style={styles.button}
          onPress={() => router.navigate('/todo')}
        />

        <Button 
          label="DELETE"
          color="red"
          style={styles.button}
          onPress={() => router.navigate('/todo')}
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

export default edit