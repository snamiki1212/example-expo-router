import { Redirect } from "expo-router";
export default function Service1Page() {
  const random = Math.floor(Math.random() * 10) % 2 === 0;
  const tutorialIsFinished = random;
  console.info("Service1Page", { random });
  if (tutorialIsFinished) {
    return <Redirect href="/service1/home" />;
  }
  return <Redirect href="/service1/tutorial" />;
}
