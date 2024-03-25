import { useEffect } from "react";

type IUseKeyboardNavigationArgs = {
  functionToBeExecuted: () => void;
  useControl?: boolean;
  keyToListen: string;
};

const useKeyboardNavigation = ({
  functionToBeExecuted,
  useControl,
  keyToListen,
}: IUseKeyboardNavigationArgs) => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (useControl && e.ctrlKey && e.key === keyToListen) {
        functionToBeExecuted();
      }

      if (!useControl && e.key === keyToListen) {
        functionToBeExecuted();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [functionToBeExecuted, keyToListen, useControl]);
};

export default useKeyboardNavigation;
