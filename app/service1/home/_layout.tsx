import { Text } from "react-native";
import { Tabs } from "expo-router";

export default function Service1HomeLayout() {
  return (
    <>
      <Tabs initialRouteName="/service1/home/(tab1)/index">
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
      </Tabs>
    </>
  );
}
