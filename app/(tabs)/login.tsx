import { Button, Image, StyleSheet, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function LoginScreen() {
  return (
    <ScrollView>
      <View>
        <Image source={require('@/assets/images/login-img.png')} />
      </View>
      <View>
        <TextInput
          placeholder='Username'
          defaultValue=''
        />
        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          defaultValue=''
        />
        <Button
          title='SIGN IN'
        />
        <Button
          title='SIGN UP'
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
