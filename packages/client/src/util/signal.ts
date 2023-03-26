import {effect, Signal, signal} from "@preact/signals-react";

type UseSignalReturn<T, R> = [Readonly<Signal<R>>, (count: T) => R];

/**
 * Custom signal hook factory function
 * @param initValue initial value
 * @param updater update signal value function
 */
export function useSignalHook<T, R>(initValue: R, updater: (data: T) => R): UseSignalReturn<T, R> {
  const signal$$ = signal<R>(initValue);
  return [
    signal$$,
    (data: T) => signal$$.value = updater(data),
  ]
}

/**
 * Custom signal effect hook factory function
 * @param functions effect function object
 */
export function useEffectHook<T>(functions: ((data: T) => void)[]): (params: Signal<T>) => () => void {
  return (param: Signal<T>) => effect(() => {
    functions.forEach((fn) => fn(param.value));
  });
}
