import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreStateModule } from '@mdv10/core-state';
import { LoadingComponent } from './loading/loading.component';
import { TokenInterceptor } from './auth.interceptor';
import { ComputersModule } from './computers/computers.module';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    CoreStateModule,
    MatProgressBarModule,
    ComputersModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
