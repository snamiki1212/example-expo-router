import { Stack } from "expo-router";

import { TutorialProvider } from "../src/features/tutorial";

export default function AppLayout() {
  return (
    <TutorialProvider>
      <Stack screenOptions={{ title: "Top" }} />
    </TutorialProvider>
  );
}
