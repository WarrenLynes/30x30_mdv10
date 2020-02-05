import { Component, OnDestroy, OnInit } from '@angular/core';
import { Computer, ComputersService } from '@mdv10/core-data';
import { ComputersFacade } from '@mdv10/core-state';
import { Observable, Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormComponent } from './form/form.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mdv10-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  selected$: Observable<Computer>;
  dialogRef: MatDialogRef<any>;

  constructor(
    private facade: ComputersFacade,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.facade.selected$.pipe(takeUntil(this.destroy$)).subscribe((selected) => {
      if(selected) {
        this.onEdit(selected);
      } else if(this.dialogRef){
        this.dialogRef.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onEdit(entity: Computer) {
    this.dialogRef = this.dialog.open(FormComponent, { data: entity });

    this.dialogRef.afterClosed().subscribe((action) => {
      if(action) {
        if (action.action === 'SUBMIT') {
          this.facade.save(action.update);
        } else if ( action.action === 'DELETE') {
          this.facade.delete(action.update);
        }
      }
      this.facade.select(null);
    });
  }

  onCreate() {
    this.dialogRef = this.dialog.open(FormComponent, { data: null });

    this.dialogRef.afterClosed().subscribe((action) => {
      if(action) {
        if (action.action === 'SUBMIT') { this.facade.save(action.update); }
      }
      this.facade.select(null);
    });
  }
}
