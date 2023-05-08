import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import { SplashScreen } from "expo-router";
import { useTutorial } from "../src/features/tutorial";
import { useRouter } from "../src/navitaion/useRouter";

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
    router.push({ pathname: "/_sitemap" });
  };

  const toService1Page = () => {
    router.push({
      pathname: "/service1",
      params: { service1: "this is service1 params" },
    });
  };

  const toService2Page = () => {
    router.push({
      pathname: "/service2",
      params: { service2: "this is service2 params" },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.square}>
          <Button title="to Service1" onPress={toService1Page} />
          <Text>Tutorial is already done.</Text>
          <Switch
            value={isFinishedTutorial}
            onChange={() => {
              toggleTutorial();
            }}
          />
        </View>
        <View style={styles.square}>
          <Button title="to Service2" onPress={toService2Page} />
        </View>
        <View style={styles.square}>
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
    gap: 10,
  },
  square: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
});
