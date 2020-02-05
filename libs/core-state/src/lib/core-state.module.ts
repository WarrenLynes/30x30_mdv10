import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './app.state';
import { AppFacade } from './app.facade';
import { AuthEffects } from './auth.effects';
import { AuthFacade } from './auth.facade';
import { SnackbarService } from './snackbar.service';
import { MatSnackBarModule } from '@angular/material';
import { ComputersEffects } from './computers.effects';
import { ComputersFacade } from './computers.facade';


@NgModule({
  imports: [
    MatSnackBarModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([
      AuthEffects,
      ComputersEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
  ],
  providers: [
    AppFacade,
    AuthFacade,
    ComputersFacade,
    SnackbarService
  ]
})
export class CoreStateModule {}
