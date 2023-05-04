import { useEffect } from "react";
import { Redirect } from "expo-router";
// import { View, Text } from "react-native";
import { useTutorial } from "../../src/features/tutorial";

export default function Service1Page() {
  // const random = Math.floor(Math.random() * 10) % 2 === 0;
  // const tutorialIsFinished = random;
  // console.info("Service1Page", { random });

  const [withTutorial, toggleTutorial] = useTutorial();

  /**
   * Async run to toggle tutorial after rendering.
   */
  useEffect(() => {
    console.info("in useEffect", { withTutorial });
    if (!withTutorial) {
      setTimeout(() => {
        toggleTutorial();
      }, 0);
    }
  }, [withTutorial, toggleTutorial]);

  if (withTutorial) {
    return <Redirect href="/service1/tutorial" />;
  }
  console.info({ withTutorial });
  return <Redirect href="/service1/home" />;
}
