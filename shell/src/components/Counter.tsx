import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  countSelector,
} from "../redux/counter";

export function Counter() {
  const count = useAppSelector(countSelector);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
}
