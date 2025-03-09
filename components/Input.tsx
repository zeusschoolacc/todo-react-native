import { TextInput } from "react-native-gesture-handler";

export default function Input({placeholder, isHash = false}: {placeholder: string, isHash?: boolean}) {
  return (
    <TextInput
        secureTextEntry={isHash}
        placeholder={placeholder}
        defaultValue=''
        style={{
            backgroundColor: "white",
            paddingVertical: 18,
            paddingHorizontal: 15,
            borderRadius: 10,
        }}
    />
  )
}

