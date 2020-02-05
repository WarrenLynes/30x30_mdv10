import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {

  snackbarRefs: MatSnackBarRef<SimpleSnackBar>[] = [];

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    console.log(message);
    this.snackbarRefs.push(this._snackBar.open(message, null, {
      duration: 2000,
    }));
  }
}
