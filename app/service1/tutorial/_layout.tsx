import { View, Text } from "react-native";
import { Slot } from "expo-router";

export default function HomeLayout() {
  return (
    <View>
      <View>
        <Text>this is header</Text>
      </View>
      <Slot />
      <View>
        <Text>this is footer</Text>
      </View>
    </View>
  );
}
