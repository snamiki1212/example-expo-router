import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "../../../../src/navitaion/useRouter";

export default function Tab1() {
  const router = useRouter();
  const openModal = () => {
    router.push({ pathname: "/service1/home/(tab1)/modal" });
  };
  return (
    <View style={styles.container}>
      <Text>This is Service1 Home Page</Text>
      <Button onPress={openModal} title="open modal1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
