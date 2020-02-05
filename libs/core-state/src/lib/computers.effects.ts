import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Computer, ComputersService } from '@mdv10/core-data';
import { Store } from '@ngrx/store';
import { State } from '@mdv10/core-state';
import {
  load,
  loadSuccess,
  loadFailure,
  deleteComputer,
  deleteSuccess,
  deleteFailure,
  save,
  saveSuccess, saveFailure, create, createSuccess, createFailure
} from './computers.actions';
import { catchError, delay, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable()
export class ComputersEffects {

  snackMessages = {
    '[COMPUTERS][DELETE][SUCCESS]': 'Successfully Deleted',
    '[COMPUTERS][SAVE][SUCCESS]': 'Successfully Updated',
    '[COMPUTERS][CREATE][SUCCESS]': 'Successfully Created'
  };

  constructor(
    private actions$: Actions,
    private service: ComputersService,
    private store: Store<State>,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  load$ = createEffect(
    () => this.actions$.pipe(
      ofType(load),
      //DELAY TO NOTICE AWESOME PROGRESS BAR
      delay(1500),
      exhaustMap(() =>
        this.service.all().pipe(
          map((computers: Computer[]) => loadSuccess({data: computers})),
          catchError(error => of(loadFailure({error})))
        )
      )
    )
  );

  save$ = createEffect(
    () => this.actions$.pipe(
      ofType(save),
      //DELAY TO NOTICE AWESOME PROGRESS BAR
      delay(1500),
      exhaustMap(({type, entity}) =>
        this.service.update(entity).pipe(
          map((update: Computer) => saveSuccess({entity: update})),
          catchError(error => of(saveFailure({error})))
        )
      )
    )
  );

  create$ = createEffect(
    () => this.actions$.pipe(
      ofType(create),
      //DELAY TO NOTICE AWESOME PROGRESS BAR
      delay(1500),
      exhaustMap(({type, entity}) =>
        this.service.create(entity).pipe(
          map((update: Computer) => createSuccess({entity: update})),
          catchError(error => of(createFailure({error})))
        )
      )
    )
  );

  delete$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteComputer),
      delay(1500),
      switchMap(({type, entity}) =>
        this.service.delete(entity.id).pipe(
          map(() => deleteSuccess({id: entity.id})),
          catchError(error => of(deleteFailure({error})))
        )
      )
    )
  );

  onSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteSuccess, saveSuccess, createSuccess),
      map(({type}) => {
        this.snackbarService.openSnackBar(this.snackMessages[type]);
        return load();
      })
  ));
}
