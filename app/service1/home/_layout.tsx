import { View, Text } from "react-native";
import { Slot, Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <View>
      <View>
        <Text>this is header</Text>
      </View>
      <Stack>
        <Stack.Screen name="Service1Home" />
        <Stack.Screen name="service1/home/modal1" />
      </Stack>
      {/* <Slot /> */}
      {/* <View>
        <Text>this is footer</Text>
      </View> */}
    </View>
  );
}
