import ITask from '@/types/ITask'
import { useRouter } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { CheckCircle, RotateCcw, Trash2 } from 'react-native-feather'


interface TaskProps {
    task: ITask
    changeStatus: (item_id: number, current_status: string) => void
}

const Task: React.FC<TaskProps> = ({task, changeStatus}) => {
  const router = useRouter();

  const { item_id, item_name, status } = task;
    const isCompleted = status === 'inactive';
  
    return (
    <TouchableOpacity style={styles.container} onPress={
        isCompleted
        ?
        () => router.push('/edit-completed')
        :
        () => router.push('/edit')
        }>
        <View style={styles.left}>
            <Text style={styles.text}>{item_name}</Text>
            <Trash2 scale={0.7} color={'red'}/>
            
        </View>
        <TouchableOpacity onPress={() => changeStatus(item_id, status)}>
            {isCompleted ? <RotateCcw scale={0.7} color={'orange'}/> : <CheckCircle scale={0.7} color={'green'}/>}
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    },
    text: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    trash: {
        fontSize: 10
    }
})

export default Task