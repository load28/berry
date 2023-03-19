import React from "react";
import {computed, signal} from "@preact/signals-react";


const SignalTest = () => {
  const count = signal(0);
  const double = computed(() => count.value * 2);

  return (
    <div>
      <button onClick={() => count.value++}>
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
