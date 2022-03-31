import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OAuthModule, OAuthStorage} from 'angular-oauth2-oidc';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './core/interceptors/http.interceptor';
import { MAT_DATE_LOCALE } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent
    
 


  ],
  imports: [
    BrowserModule,
    CoreModule,    
    BrowserAnimationsModule,
    OAuthModule.forRoot()
  

  ],
  
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'es-AR'},   
    {provide: OAuthStorage, useValue: localStorage}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
