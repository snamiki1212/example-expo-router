import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "../../../src/navitaion/useRouter";

export default function TutorialPage() {
  const router = useRouter();
  const toService1Home = () => {
    router.push({ pathname: "/service1/home" });
  };
  return (
    <View style={styles.container}>
      <Text>This is Tutorial Page</Text>
      <Button title="To Service1 Home" onPress={toService1Home} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
