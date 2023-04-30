import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SplashScreen, Link } from "expo-router";

export default function AppPage() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true);
    }, 1_500);
  }, []);

  return (
    <>
      {isReady && <SplashScreen />}
      <View style={styles.container}>
        <View style={styles.main}>
          <Text>this is first view</Text>
        </View>
        <View>
          <Link href="/service1">
            <Button title="Service1" />
          </Link>
          {/* TODO: to service2 link */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
