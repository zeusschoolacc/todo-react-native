import Button from '@/components/Button'
import Header from '@/components/Header';
import Task from '@/components/Task';
import ITask from '@/types/ITask';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const todo = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState<ITask[]>([]);

    const fetchTasks = async () => {
        setLoading(true);  
        
        try {
            const user_id = parseInt(await AsyncStorage.getItem('user_id') as string);

            const response = await fetch(`https://todo-list.dcism.org/getItems_action.php?status=active&user_id=${user_id}`, {
                method: 'GET'
            });
            const data = await response.json();

            setTasks(Object.values(data.data));
          } catch (error) {
              Alert.alert('Error fetching tasks:', error as string);
          }
          finally {
            setLoading(false);
          }
      };

    useEffect(() => {
        fetchTasks();
    }, []);

    const changeStatus = async (item_id: number, current_status: string) => {
        const isActive = current_status === 'active' ? true : false;

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

        } catch (error) {
            console.error('Error updating task status:', error);
        }
        finally {
          fetchTasks();
        }
    }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Header title='TO DO'/>

        <View style={styles.tasks}>
            {
              loading &&
              <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>Loading...</Text>
            }

            {
                !loading && tasks.length === 0 && (
                    <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>No tasks available</Text>
                )
            }

            {
                !loading && tasks.map((task) => (
                    <Task key={task.item_id} task={task} changeStatus={changeStatus}/>
                ))
            }
        </View>

        <TouchableOpacity style={styles.button} 
        onPress={() => router.replace('/add')}
        >
            <Text style={styles.text}>ADD TASK</Text>
        </TouchableOpacity>
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

export default todo