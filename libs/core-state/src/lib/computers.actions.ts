import { createAction, props } from '@ngrx/store';
import { Computer } from '@mdv10/core-data';

export const load = createAction(
  '[COMPUTERS][LOAD][REQUEST]'
);

export const loadSuccess = createAction(
  '[COMPUTERS][LOAD][SUCCESS]',
  props<{ data: Computer[] }>()
);

export const loadFailure = createAction(
  '[COMPUTERS][LOAD][FAILURE]',
  props<{ error: any }>()
);

export const select = createAction(
  '[COMPUTERS][SELECT]',
  props<{ entity: Computer }>()
);

export const reset = createAction(
  '[COMPUTERS][RESET]'
);

export const deleteComputer = createAction(
  '[COMPUTERS][DELETE][REQUEST]',
  props<{entity: Computer}>()
);
export const deleteSuccess = createAction(
  '[COMPUTERS][DELETE][SUCCESS]',
  props<{id: number}>()
);
export const deleteFailure = createAction(
  '[COMPUTERS][DELETE][FAILURE]',
  props<{error: any}>()
);


export const save = createAction(
  '[COMPUTERS][SAVE][REQUEST]',
  props<{entity: Computer}>()
);
export const saveSuccess = createAction(
  '[COMPUTERS][SAVE][SUCCESS]',
  props<{entity: Computer}>()
);
export const saveFailure = createAction(
  '[COMPUTERS][SAVE][FAILURE]',
  props<{error: any}>()
);


export const create = createAction(
  '[COMPUTERS][CREATE][REQUEST]',
  props<{entity: Computer}>()
);
export const createSuccess = createAction(
  '[COMPUTERS][CREATE][SUCCESS]',
  props<{entity: Computer}>()
);
export const createFailure = createAction(
  '[COMPUTERS][CREATE][FAILURE]',
  props<{error: any}>()
);


