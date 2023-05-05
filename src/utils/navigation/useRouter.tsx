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

  const replace = useCallback(
    (href: T) => {
      router.replace(href);
    },
    [router.replace]
  );

  const back = router.back;

  /**
   * TODO: implement type puzzle
   *
   * e.g.) setParams<"/service2">(params) // <== 'params' should be type checked based on passing pathname in generic.
   */
  type SetParamsArgs = Parameters<typeof router.setParams>;
  const setParams = useCallback((...params: SetParamsArgs) => {
    router.setParams(...params);
  }, []);

  return {
    push,
    replace,
    back,
    setParams,
  };
};
