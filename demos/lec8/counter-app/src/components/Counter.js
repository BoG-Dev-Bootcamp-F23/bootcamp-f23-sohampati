import { useState } from "react";
import IncrementButton from "./IncrementButton";
import ResetButton from "./ResetButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Our count is currently: {count}</div>
      <IncrementButton
        onPress={() => {
          setCount(count + 1);
        }}
        count={count}
      />
      <ResetButton setCount={setCount} />
    </div>
  );
}
