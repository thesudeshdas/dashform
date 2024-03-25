import { useEffect, useState } from "react";

type IUseScrollNavigationArgs = {
  wheelDownFunction?: () => void;
  wheelUpFunction?: () => void;
};

const useScrollNavigation = ({
  wheelDownFunction = () => {},
  wheelUpFunction = () => {},
}: IUseScrollNavigationArgs) => {
  const [scrollDelta, setScrollDelta] = useState(0);

  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      setScrollDelta((prevDelta) => prevDelta + e.deltaY);
    }

    function executeScrollFunctions() {
      if (scrollDelta > 0) {
        wheelDownFunction();
      } else if (scrollDelta < 0) {
        wheelUpFunction();
      }

      setScrollDelta(0);
    }

    const scrollTimeout = setTimeout(executeScrollFunctions, 200);

    document.addEventListener("wheel", handleScroll);

    // Clean up the event listener
    return function cleanup() {
      document.removeEventListener("wheel", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [scrollDelta, wheelDownFunction, wheelUpFunction]);
};

export default useScrollNavigation;
