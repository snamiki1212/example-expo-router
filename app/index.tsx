import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import { SplashScreen, useRouter } from "expo-router";
import { useTutorial } from "../src/features/tutorial";

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
      <Content />
    </>
  );
}

const Content = () => {
  const router = useRouter();
  const [isFinishedTutorial, toggleTutorial] = useTutorial();

  const toSitemapPage = () => {
    router.push("/_sitemap");
  };
  const toService1Page = () => {
    router.push("/service1");
  };
  const toService2Page = () => {
    router.push("/service2");
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Button title="to Service1" onPress={toService1Page} />
          <Text>with tutorial</Text>
          <Switch
            value={!isFinishedTutorial}
            onChange={() => {
              toggleTutorial();
            }}
          />
        </View>
        <View>
          <Button title="to Service2" onPress={toService2Page} />
        </View>
        <View>
          <Button title="to Sitemap" onPress={toSitemapPage} />
        </View>
      </View>
    </View>
  );
};

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
});
