import { appReducer, IAppState } from './app.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer, IAuthState } from './auth.reducer';
import { computersReducer, IComputersState } from './computers.reducer';

export interface State {
  app: IAppState;
  auth: IAuthState;
  computers: IComputersState;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
  auth: authReducer,
  computers: computersReducer
};


