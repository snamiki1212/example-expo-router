import { useEffect } from "react";
import { Redirect } from "expo-router";
// import { View, Text } from "react-native";
import { useTutorial } from "../../src/features/tutorial";

export default function Service1Page() {
  // const random = Math.floor(Math.random() * 10) % 2 === 0;
  // const tutorialIsFinished = random;
  // console.info("Service1Page", { random });

  const [isFinishedTutorial, toggleTutorial] = useTutorial();

  /**
   * Async run to toggle tutorial after rendering.
   */
  useEffect(() => {
    if (isFinishedTutorial) return;
    setTimeout(() => {
      toggleTutorial();
    }, 0);
  }, [isFinishedTutorial, toggleTutorial]);

  if (isFinishedTutorial) {
    return <Redirect href="/service1/home" />;
  }
  return <Redirect href="/service1/tutorial" />;
}
