import React from "react";
import {batch, computed, effect, signal,} from "@preact/signals-react";


const SignalTest = () => {
  const count = signal(0);
  const double = computed(() => count.value * 2);

  effect(() => {
    console.log('count changed', count.value);
  });

  effect(() => {
    console.log('double changed', double.value);
  });

  return (
    <div>
      <button onClick={() => batch(() => {
        count.value++;
        count.value++;
        count.value++;
      })}>
        <>click: {count}</>
      </button>
      <div>
        <span>double count:</span>
        <>{double}</>
      </div>
    </div>
  )
}

export default SignalTest;
