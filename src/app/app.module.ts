import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/services/interceptors/auth-interceptor';
import { AppConfig } from './shared/config/appconfig';
import { MapComponent } from './modules/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ToastModule,
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true,
    },
    AppConfig,
    CurrencyPipe,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
