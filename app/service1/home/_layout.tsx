import { View, Text } from "react-native";
import { Slot, Stack, useRouter } from "expo-router";

export default function Service1HomeLayout() {
  const router = useRouter();
  return (
    <View>
      <View>
        <Text>this is header</Text>
      </View>

      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="modal1" options={{ presentation: "modal" }} />
      </Stack>

      <View>
        <Text>this is foouter</Text>
      </View>
    </View>
  );
}
