import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputersComponent } from './computers.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '@mdv10/material';
import { FormComponent } from './form/form.component';
import { MatSlideToggleModule } from '@angular/material';



@NgModule({
  declarations: [ComputersComponent, ListComponent, FormComponent],
  imports: [CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ComputersComponent,
      children: [
        { path: '', component: ListComponent }
      ]
    }]),
    MaterialModule, MatSlideToggleModule
  ],
  exports: [ComputersComponent],
  entryComponents: [FormComponent]
})
export class ComputersModule { }
