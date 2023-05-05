import { Text, View, Button } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function Service2Page() {
  const router = useRouter();
  const openModal = () => {
    router.push("/service2/modal");
  };
  return (
    <View>
      <Text>this is service2 page</Text>
      <Button title="Open Modal" onPress={openModal} />
      {/* <Text onPress={openModal}>open modal</Text> */}
    </View>
  );
}
