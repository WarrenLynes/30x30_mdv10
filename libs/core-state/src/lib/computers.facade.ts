import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentComputers, currentSelection, loading, hasCurrentComputers } from './computers.reducer';
import { Computer } from '@mdv10/core-data';
import { State } from '@mdv10/core-state';
import { load, reset, select, deleteComputer, save, create } from './computers.actions';

@Injectable()
export class ComputersFacade {
  get hasData$(): Observable<boolean> {
    return this.store.select(hasCurrentComputers);
  }

  get data$(): Observable<Computer[]> {
    return this.store.select(currentComputers);
  }

  get selected$(): Observable<Computer> {
    return this.store.select(currentSelection);
  }

  get loading$(): Observable<boolean> {
    return this.store.select(loading);
  }

  constructor(private store: Store<State>) {}


  load() {
    this.store.dispatch(load());
  }

  select(entity: Computer) {
    this.store.dispatch(select({entity}));
  }

  delete(entity: Computer) {
    this.store.dispatch(deleteComputer({entity}))
  }

  reset() {
    this.store.dispatch(reset())
  }

  save(entity: Computer) {
    if (!entity.id) {
      this.store.dispatch(create({entity}));
    } else {
      this.store.dispatch(save({entity}))
    }
  }
}
