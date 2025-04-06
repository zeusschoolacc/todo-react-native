import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
        <Image
            source={require('../assets/images/header.png')}
            style={styles.image}
            resizeMode="contain"
        />
        <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFC6D0', 
        alignItems: 'center', 
        width: 400, 
        height: 270,
        justifyContent: 'center',
    },
  image: {
    position: 'absolute',
    top: -70,
    width: 400, 
    height: 400, 
    alignSelf: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});

export default Header