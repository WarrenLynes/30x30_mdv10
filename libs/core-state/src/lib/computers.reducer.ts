import { Computer } from '@mdv10/core-data';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { deleteComputer, deleteSuccess, load, loadSuccess, reset, save, select } from './computers.actions';
import { State } from '@mdv10/core-state';

export interface IComputersState {
  data: Computer[];
  selected: Computer;
  loading: boolean;
  error: string;
}

const initialState: IComputersState = {
  data: null,
  selected: null,
  loading: false,
  error: null
};

const reducer = createReducer(
  initialState,
  on(reset, (state) => ({
    ...state,
    selected: null,
    error: null,
    loading: false
  })),
  on(load, (state) => ({
    ...state,
    loading: true
  })),

  on(save, (state) => ({
    ...state,
    loading: true
  })),

  on(loadSuccess, (state, {data}) => ({
    ...state, error: null, data, loading: false
  })),
  on(select, (state, {entity}) => ({
    ...state,
    selected: entity
  })),
  on(deleteComputer, (state) => ({
    ...state,
    loading: true
  })),
  on(deleteSuccess, (state, {id}) => ({
    ...state,
    data: state.data.filter((x) => x.id !== id),
    selected: null,
    error: null,
    loading: false
  })),
);

export function computersReducer(state = initialState, action: Action): IComputersState {
  return reducer(state, action);
}

export const getComputersState = (state: State) => state.computers;
export const mapToCurrentComputers = (state: IComputersState) => state.data;
export const mapToHasCurrentComputers = (state: IComputersState) => !!state.data;
export const mapToLoading = (state: IComputersState) => state.loading;
export const mapToHasSelection = (state: IComputersState) => !!state.selected;
export const mapToSelection = (state: IComputersState) => state.selected;
export const currentComputers = createSelector(getComputersState, mapToCurrentComputers);
export const hasCurrentComputers = createSelector(getComputersState, mapToHasCurrentComputers);
export const hasCurrentSelection = createSelector(getComputersState, mapToHasSelection);
export const currentSelection = createSelector(getComputersState, mapToSelection);
export const loading = createSelector(getComputersState, mapToLoading);

