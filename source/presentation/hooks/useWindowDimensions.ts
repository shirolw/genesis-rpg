import { useLayoutEffect, useState } from "react";

interface IWindowDimensionsProps {
  width: number;
  height: number;
}

interface IUseWindowDimensionsResponse {
  width: number;
  height: number;
}

const useWindowDimensions = (): IUseWindowDimensionsResponse => {
  const [dimensions, setDimensions] = useState<IWindowDimensionsProps>({
    width: 0,
    height: 0,
  });

  function handleResizeWindow(): void {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResizeWindow();

    window.addEventListener("resize", handleResizeWindow);

    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  return dimensions;
};

export default useWindowDimensions;
