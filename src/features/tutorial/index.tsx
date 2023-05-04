import { createContext, useContext } from "react";
import { createMachine, ActorRefFrom } from "xstate";
import { useMachine, useInterpret, useActor } from "@xstate/react";

type TutorialContext = {};
type TutorialEvent = { type: "TOGGLE"; value?: boolean };
type TutorialStates =
  | { value: "FINISHED"; context: {} }
  | { value: "UNFINISHED"; context: {} };

const toggleTutorialMachine = createMachine<
  TutorialContext,
  TutorialEvent,
  TutorialStates
>({
  id: "tutorial",
  initial: "UNFINISHED",
  schema: {
    context: {},
    events: {} as TutorialEvent,
  },
  states: {
    UNFINISHED: {
      on: { TOGGLE: "FINISHED" },
    },
    FINISHED: {
      on: { TOGGLE: "UNFINISHED" },
    },
  },
});

type GlobalTutorialContextType = {
  value: ActorRefFrom<typeof toggleTutorialMachine>;
};
export const TutorialContext = createContext({} as GlobalTutorialContextType);
export const TutorialProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useInterpret(toggleTutorialMachine);
  return (
    <TutorialContext.Provider value={{ value }}>
      {children}
    </TutorialContext.Provider>
  );
};

export const useTutorial = () => {
  // const [state, send] = useMachine(toggleTutorialMachine);
  const { value } = useContext(TutorialContext);
  const [state, send] = useActor(value);
  const withTutorial = state.matches("UNFINISHED");
  const toggle = () => send("TOGGLE");
  return [withTutorial, toggle] as const;
};
