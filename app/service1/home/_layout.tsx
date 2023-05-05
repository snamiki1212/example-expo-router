import { View, Text } from "react-native";
import { Slot, Stack, Tabs, useRouter } from "expo-router";

export default function Service1HomeLayout() {
  const router = useRouter();
  return (
    <>
      <Tabs initialRouteName="/service1/home/(tab1)/index">
        <Tabs.Screen name="/service1/home/index" options={{ href: null }} />
        <Tabs.Screen
          name="/service1/home/(tab1)/index"
          options={{ title: "Tab1", tabBarIcon: () => <Text>⭐️</Text> }}
        />
        <Tabs.Screen
          name="/service1/home/(tab2)/index"
          options={{ title: "Tab2", tabBarIcon: () => <Text>👾</Text> }}
        />
        <Tabs.Screen
          name="/service1/home/(tab3)/index"
          options={{ title: "Tab3", tabBarIcon: () => <Text>🚀</Text> }}
        />
        {/* <Tabs.Screen name="modal1" options={{ href: null }} /> */}
      </Tabs>
      {/* <Stack>
        <Stack.Screen
          name="/service1/home/modal1"
          options={{ presentation: "modal" }}
        />
      </Stack> */}
    </>
  );
}
