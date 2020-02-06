import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '@mdv10/material';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [LoginComponent, ToolbarComponent, DialogComponent],
  exports: [LoginComponent, ToolbarComponent, DialogComponent]
})
export class UiModule {}
