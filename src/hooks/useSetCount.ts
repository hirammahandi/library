import { useState } from "react";

export const useSetCount = () => {
  const [count, setCount] = useState(5);

  const handleChangeCount = (value: number, cb: () => void) => {
    setCount(value);
    cb();
  };

  return {
    count,
    handleChangeCount,
  };
};
