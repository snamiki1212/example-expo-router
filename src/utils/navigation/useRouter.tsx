import { useCallback } from "react";
import { useRouter as useExpoRouter } from "expo-router";

export interface HrefBase {
  pathname?: string;
  params?: Record<string, any>;
}

type Router<T> = {
  /** Navigate to the provided href. */
  push: (href: T) => void;
  /** Navigate to route without appending to the history. */
  replace: (href: T) => void;
  /** Go back in the history. */
  back: () => void;
  /** Update the current route query params. */
  setParams: (params?: Record<string, string>) => void;
};

export const useRouter = <T extends HrefBase>(): Router<T> => {
  const router = useExpoRouter();

  const push = useCallback(
    (href: T) => {
      router.push(href);
    },
    [router.push]
  );
  const replace = useCallback(() => {}, []);
  const back = useCallback(() => {}, []);
  const setParams = useCallback(() => {}, []);

  return {
    push,
    replace,
    back,
    setParams,
  };
};
