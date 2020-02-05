import { Action, createReducer, createSelector, on } from '@ngrx/store';
import {
  authenticateSuccess,
  authenticateFailure,
  reset,
  logout,
  logoutSuccess,
  logoutFailure, authenticate
} from './auth.actions';
import { State } from '@mdv10/core-state';

export interface IUser {
  email: string;
  name?: string;
}

export interface IAuthState {
  authenticated: boolean;
  token: string;
  loading: boolean;
}

const initialState: IAuthState = {
  token: null,
  authenticated: false,
  loading: false
};

const reducer = createReducer(
  initialState,
  on(reset, () => ({ ...initialState })),
  on(authenticate, (state) => ({...state, loading: true})),
  on(authenticateSuccess, (state, {token}) => ({ token, authenticated: true, loading: false })),
  on(authenticateFailure, () => ({ ...initialState })),
  on(logout, (state) => ({ ...state, loading: true })),
  on(logoutSuccess, () => ({ ...initialState })),
  on(logoutFailure, () => ({ ...initialState }))
);

export function authReducer(state = initialState, action: Action): IAuthState {
  return reducer(state, action);
}

export const getAuthState = (state: State) => state.auth;
export const mapToAuthenticated = (state: IAuthState) => state.authenticated;
export const mapToLoading = (state: IAuthState) => state.loading;
export const authenticated = createSelector(getAuthState, mapToAuthenticated);
export const loading = createSelector(getAuthState, mapToLoading);

