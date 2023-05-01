import { View, Text } from "react-native";
import { Slot, Stack, Tabs, useRouter } from "expo-router";

export default function Service1HomeLayout() {
  const router = useRouter();
  return (
    <>
      <Tabs initialRouteName="(tab1)/index">
        <Tabs.Screen name="(tab1)/index" options={{ title: "Tab1" }} />
        <Tabs.Screen name="(tab2)/index" options={{ title: "Tab2" }} />
        <Tabs.Screen name="(tab3)/index" options={{ title: "Tab3" }} />
        <Tabs.Screen
          name="modal1"
          options={{}}
          // options={{ tabBarShowLabel: false, tabBarButton: undefined, tabbar }}
        />
      </Tabs>
    </>
  );
}
