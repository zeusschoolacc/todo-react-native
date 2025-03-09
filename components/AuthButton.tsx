import { Text, TouchableOpacity } from "react-native";

export default function AuthButton({title, onClick, isSecondary = false}: {title: string, onClick?: () => void, isSecondary?: boolean}) {
  return (
    <TouchableOpacity 
      onPress={onClick}
      style={{
        backgroundColor: !isSecondary ? "#F9788F" : "#EFC0C8",
        paddingVertical: 18,
        paddingHorizontal: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <Text style={{color: "white", fontWeight: 500}}>{title}</Text>
    </TouchableOpacity>
  )
}

