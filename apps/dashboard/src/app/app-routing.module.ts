import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSliderModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenInterceptor } from './auth.interceptor';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./computers/computers.module').then(m => m.ComputersModule)},
  { path: 'login', component: LoginComponent },
  { path: 'lostnfound', component: NotFoundComponent },
  { path: '**', redirectTo: 'lostnfound', pathMatch: 'full' }
];

@NgModule({
  declarations: [ AuthComponent, DashboardComponent, LoginComponent, NotFoundComponent ],
  imports: [
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatListModule,
    MatSliderModule
  ],
  exports: [RouterModule],
  providers: [TokenInterceptor]
})
export class AppRoutingModule { }
