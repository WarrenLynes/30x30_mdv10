import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../custom-validators';
import { AuthFacade } from '@mdv10/core-state';
import { Subject } from 'rxjs';

@Component({
  selector: 'mdv10-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  loginForm: FormGroup;

  constructor(private facade: AuthFacade,) {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.unsubscribe();
  }

  submit() {
    this.facade.authenticate(this.loginForm.value);
  }

  buildForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      name: new FormControl('', Validators.compose([
        Validators.minLength(3),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
      ]))
    });
  }
}
