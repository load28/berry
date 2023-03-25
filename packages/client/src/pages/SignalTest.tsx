import React from "react";
import {batch, computed, effect, signal} from "@preact/signals-react";


const useDoubleCount = (initCount: number) => {
  const count$$ = signal<number>(initCount);

  const updateValue = (value: number) => {
    count$$.value = updateDouble(value);
  }

  const updateDouble = (count: number): number => {
    return count * count;
  }

  return [
    count$$,
    (count: number) => updateValue(count),
  ]
}

const useCount = (initCount: number) => {
  const count$$ = signal<number>(initCount);
  return [
    count$$,
    (count: number) => count$$.value = count,
  ]
}

const [double, setDouble] = useDoubleCount(0);
const [count ,setCount] = useCount(0);

effect(() => {
  setDouble(count.value);
});

const SignalTest = () => {

  return (
    <div>
      <button onClick={() => batch(() => {
        setCount(count.value + 1);
      })}>update Count</button>
      <div>
        <span>count:</span>
        <>{count}</>
      </div>
      <div>
        <span>double count:</span>
        <>{double}</>
      </div>
    </div>
  )
}

export default SignalTest;
