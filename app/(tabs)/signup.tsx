import AuthButton from '@/components/AuthButton';
import Input from '@/components/Input';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function LoginScreen() {
    const router = useRouter()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={require('@/assets/images/signup-img.png')} 
        />
      </View>
      <View style={styles.inputContainer}>
        <Input 
          placeholder='Username'
        />
        <Input 
          placeholder='Email'
        />
        <Input 
          placeholder='Password'
          isHash
        />
        <Input 
          placeholder='Confirm Password'
          isHash
        />
        <AuthButton 
          title='SIGN UP'
        />

        <AuthButton 
            onClick={() => {router.push('/')}}  
            title='SIGN IN'
            isSecondary
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFC0CB",
    paddingHorizontal: 40
  },
  imageContainer: {
    height: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: "hidden"
  },
  image: {
    width: 310,
    height: 310,
    borderRadius: 10
  },
  inputContainer: {
    flexDirection: "column",
    gap: 10
  }
});
