import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { appInit } from './app.actions';
import { State } from '@mdv10/core-state';

export interface IAppState {
  initialized: boolean;
}

const initialState: IAppState = {
  initialized: false,
};

const reducer = createReducer(
  initialState,
  on(appInit, (state) => ({
    ...state,
    initialized: true
  }))
);

export function appReducer(state = initialState, action: Action): IAppState {
  return reducer(state, action);
}

export const getAppState = (state: State) => state.app;

export const mapToIsInitialized = (state: IAppState) => state.initialized === true;

export const isInitialized = createSelector(
  getAppState,
  mapToIsInitialized
);
