import { RelativePathString, Slot, usePathname, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import CustomTabBar from "@/components/CustomTabBar";

export default function Layout() {
  const pathname = usePathname();
  const router = useRouter();

  const shouldShowNavbar = pathname !== "/signin" && pathname !== "/";

  const routes: {
    key: string;
    name: '/completed' | '/todo' | '/profile';
  }[] = [
    { key: "Completed", name: "/completed" },
    { key: "ToDo", name: "/todo" },
    { key: "Profile", name: "/profile" },
  ]

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Slot />
        {shouldShowNavbar && 
        <CustomTabBar 
          state = {{ 
            index: 0,
            routes: routes, 
          }}
          navigation = {{
            navigate: (key: string) => {
              const route = routes.find(route => route.key === key);
              if (route) {
                router.push(route.name);
              } else {
                console.error(`Route ${key} not found`);
              }
            },
          }}
        />}
      </View>
    </SafeAreaProvider>
  );
}
