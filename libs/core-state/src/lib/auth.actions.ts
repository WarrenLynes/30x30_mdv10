import { createAction, props } from '@ngrx/store';
import { IUser } from './auth.reducer';
import { Credentials } from '@mdv10/core-data';

export const authenticate = createAction(
  '[AUTH][AUTHENTICATE][REQUEST]',
  props<{ credentials: Credentials }>()
);

export const authenticateSuccess = createAction(
  '[AUTH][AUTHENTICATE][SUCCESS]',
  props<{ token: string }>()
);

export const authenticateFailure = createAction(
  '[AUTH][AUTHENTICATE][FAILURE]',
  props<{ error: any }>()
);
export const logout = createAction( '[AUTH][LOGOUT]' );
export const logoutFailure = createAction( '[AUTH][LOGOUT][FAILURE]' );
export const logoutSuccess = createAction( '[AUTH][LOGOUT][SUCCESS]' );
export const reset = createAction( '[AUTH][RESET]' );
