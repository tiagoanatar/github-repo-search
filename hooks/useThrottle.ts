import { useEffect, useState, useRef } from "react";

export const useThrottle = (initValue:any, ms = 500) => {
  const [currentValue, setCurrentValue] = useState(initValue);
  const [lastValue, setLastValue] = useState(initValue);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      setLastValue(currentValue);
      timeoutId.current = null;
    }, ms);
  }, [lastValue, currentValue, ms]);

  return [lastValue, setCurrentValue];
};
