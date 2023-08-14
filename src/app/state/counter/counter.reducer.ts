import { toggleSeat } from './counter.action';
import { CounterState, initialState } from './counter.state';
import { Action, createReducer, on } from '@ngrx/store';

const _counterReducer = createReducer(
  initialState,
  on(toggleSeat, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  })
);

export function counterReducer(
  state: CounterState | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
