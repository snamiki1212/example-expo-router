import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>This is Home Page</Text>
      <Link href="/service1/home/modal1">
        <Button title="modal1" />
      </Link>
    </View>
  );
}
