import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreStateModule } from '@mdv10/core-state';
import { LoadingComponent } from './loading/loading.component';
import { TokenInterceptor } from './auth.interceptor';
import { ComputersModule } from './computers/computers.module';
import { MaterialModule } from '@mdv10/material';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    CoreStateModule,
    ComputersModule,
    MaterialModule
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
