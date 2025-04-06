import type React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { Check, Plus, User } from "react-native-feather"

interface TabBarProps {
  state: {
    index: number
    routes: { key: string; name: string }[]
  }
  navigation: {
    navigate: (name: string) => void
  }
}

const CustomTabBar: React.FC<TabBarProps> = ({ state, navigation }) => {
  const { width } = Dimensions.get("window")

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.tabBar}>
        {/* Completed Tab */}
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Completed")}>
          <View style={[styles.iconContainer, state.index === 0 && styles.activeIconContainer]}>
            <Check stroke="#FF8AAE" width={24} height={24} />
          </View>
          <Text style={styles.tabText}>Completed</Text>
        </TouchableOpacity>

        {/* To Do Tab */}
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("ToDo")}>
          <View
            style={[styles.iconContainer, styles.centerIconContainer, state.index === 1 && styles.activeIconContainer]}
          >
            <Plus stroke="white" width={24} height={24} />
          </View>
          <Text style={styles.tabText}>To Do</Text>
        </TouchableOpacity>

        {/* Profile Tab */}
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Profile")}>
          <View style={[styles.iconContainer, state.index === 2 && styles.activeIconContainer]}>
            <User stroke="#FF8AAE" width={24} height={24} />
          </View>
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    height: 30,
    backgroundColor: "#E5A9B3", // Darker pink from the image
  },
  tabBar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#FFD1DC", // Light pink background
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  centerIconContainer: {
    backgroundColor: "#FF8AAE", // Pink color for the center icon
  },
  activeIconContainer: {
    borderWidth: 2,
    borderColor: "#FF8AAE",
  },
  tabText: {
    fontSize: 12,
    color: "#666",
  },
})

export default CustomTabBar

