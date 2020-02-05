import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isInitialized } from './app.reducer';
import { Store } from '@ngrx/store';
import { State } from '@mdv10/core-state';
import { appInit } from './app.actions';

@Injectable()
export class AppFacade {

  get initialized$(): Observable<boolean> {
    return this.store.select(isInitialized);
  }

  constructor(private store: Store<State>) {}

  initialize() {
    this.store.dispatch(appInit());
  }
}
