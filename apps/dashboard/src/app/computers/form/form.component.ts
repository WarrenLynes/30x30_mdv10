import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComputersFacade } from '@mdv10/core-state';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Computer } from '@mdv10/core-data';

@Component({
  selector: 'mdv10-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Computer,
    private facade: ComputersFacade,
  ) {
    this.buildForm();
  }

  buildForm() {
    if(this.data) {
      this.form = new FormGroup({
        coolLevel: new FormControl(this.data.coolLevel, Validators.compose([ Validators.max(100), Validators.required ])),
        title: new FormControl(this.data.title, Validators.compose([ Validators.minLength(3), Validators.required ])),
        details: new FormControl(this.data.details, Validators.compose([ Validators.minLength(5), Validators.required ])),
        approved: new FormControl(this.data.approved, Validators.compose([ Validators.required ]))
      });
    } else {
      this.form = new FormGroup({
        coolLevel: new FormControl(0, Validators.compose([ Validators.max(100), Validators.required ])),
        title: new FormControl('', Validators.compose([ Validators.minLength(3), Validators.required ])),
        details: new FormControl('', Validators.compose([ Validators.minLength(5), Validators.required ])),
        approved: new FormControl(false, Validators.compose([ Validators.required ]))
      });
    }
  }

  onSubmit() {
    this.dialogRef.close({action: 'SUBMIT', update: {...this.data, ...this.form.value}})
  }

  onCancel() {
    this.dialogRef.close({action: 'CANCEL', update: null})
  }

  onDelete() {
    this.dialogRef.close({action: 'DELETE', update: this.data})
  }
}
