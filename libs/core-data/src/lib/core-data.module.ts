import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { ComputersService } from './computers/computers.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [AuthService, ComputersService]
})
export class CoreDataModule {}
