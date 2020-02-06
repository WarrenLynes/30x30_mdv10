import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isInitialized, isLoading } from './app.reducer';
import { Store } from '@ngrx/store';
import { State } from '@mdv10/core-state';
import { addLoad, appInit, removeLoad } from './app.actions';

@Injectable()
export class AppFacade {

  get initialized$(): Observable<boolean> {
    return this.store.select(isInitialized);
  }

  get loading$(): Observable<boolean> {
    return this.store.select(isLoading);
  }

  constructor(private store: Store<State>) {}

  initialize() {
    this.store.dispatch(appInit());
  }

  addLoad(loadId: string) {
    this.store.dispatch(addLoad({loadId}));
  }

  removeLoad(loadId: string) {
    this.store.dispatch(removeLoad({loadId}));
  }
}
