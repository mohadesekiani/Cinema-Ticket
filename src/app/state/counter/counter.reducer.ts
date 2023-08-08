import { increment, decrement, reset } from './counter.action';
import { CounterState, initialState } from './counter.state';
import { Action, createReducer, on } from '@ngrx/store';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);
/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
export function counterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}