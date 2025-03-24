import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle
} from 'react-native';

interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;                    // optional prop for customizing button color
  style?: StyleProp<ViewStyle>;      // allows extra styling if needed
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  color = '#F8739A', // default pink color
  style
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, { backgroundColor: color }]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
