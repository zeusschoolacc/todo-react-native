import Button from '@/components/Button'
import Header from '@/components/Header';
import Input from '@/components/Input';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const edit = () => {
    const [
      [_1, item_id],
      [_2, item_name],
      [_3, item_description]
    ] = useSearchParams();

    const [title, setTitle] = useState(item_name);
    const [details, setDetails] = useState(item_description);
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdate = async () => {
      setIsLoading(true);

        try {
            const response = await fetch(`https://todo-list.dcism.org/editItem_action.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    item_id,
                    item_name: title,
                    item_description: details
                }),
            });

          setIsLoading(false);
          Alert.alert('Success', 'Task edited successfully!');
        } catch (error) {
            console.error('Error updating task:', error);
        }
        finally {
          router.replace('/todo');
        }
    }

    const handleChangeStatus = async () => {
      setIsLoading(true);
    
        const isActive = true;

        try {
          const response = await fetch(`https://todo-list.dcism.org/statusItem_action.php`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({
                  status: isActive ? 'inactive' : 'active',
                  item_id
              }),
          });

          setIsLoading(false);
          Alert.alert('Success', 'Changed task status successfully!');
        } catch (error) {
            console.error('Error updating task status:', error);
        }
        finally {
          router.replace('/todo');
        }
    }

    const handleDelete = async () => {
      setIsLoading(true);

        try {
            const response = await fetch(`https://todo-list.dcism.org/deleteItem_action.php?item_id=${item_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
            const data = await response.json();
            console.log(data);

            setIsLoading(false);
            Alert.alert('Success', 'Task Deleted successfully!');
            
        } catch (error) {
            console.error('Error deleting task:', error);
        }
        finally {
          router.replace('/todo');
        }
    }


    const router = useRouter();

    if (isLoading) {
      return (
        <LoadingScreen />
      )
    }

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
          onPress={handleUpdate}
        />

        <Button 
          label="COMPLETE"
          color="green"
          style={styles.button}
          onPress={handleChangeStatus}
        />

        <Button 
          label="DELETE"
          color="red"
          style={styles.button}
          onPress={handleDelete}
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