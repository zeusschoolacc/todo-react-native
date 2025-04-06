import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { CheckCircle, Trash2 } from 'react-native-feather'


interface TaskProps {
    name: string
    isCompleted?: boolean
}

const Task: React.FC<TaskProps> = ({name, isCompleted}) => {
  const router = useRouter();
  
    return (
    <TouchableOpacity style={styles.container} onPress={
        isCompleted 
        ? 
        () => router.push('/edit-completed') 
        : 
        () => router.push('/edit')
        }>
        <View style={styles.left}>
            <Text style={styles.text}>{name}</Text>
            <Trash2 scale={0.7} color={'red'}/>
        </View>
        {isCompleted || <CheckCircle scale={0.7} color={'green'}/>}
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