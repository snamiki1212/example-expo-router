import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function TutorialPage() {
  return (
    <View>
      <Text>This is Tutorial Page</Text>
      <Link href="/service1/home">
        <Button title="Finish Tutorial" />
      </Link>
    </View>
  );
}
