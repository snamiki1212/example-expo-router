import { View, Text } from "react-native";
import { Slot, Stack } from "expo-router";

export default function Service1TutorialLayout() {
  return (
    <View>
      <View>
        <Text>this is header xx</Text>
      </View>
      {/* <Stack screenOptions={{ title: "Service1 Tutorial" }} /> */}
      <Slot />
      {/* <Slot /> */}
      <View>
        <Text>this is footer</Text>
      </View>
    </View>
  );
}
