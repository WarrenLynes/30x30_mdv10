import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputersComponent } from './computers.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '@mdv10/material';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [ComputersComponent, ListComponent, FormComponent],
  imports: [CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ComputersComponent,
      children: [ { path: '', component: ListComponent } ]
    }]),
    MaterialModule
  ],
  exports: [ComputersComponent],
  entryComponents: [FormComponent]
})
export class ComputersModule { }
