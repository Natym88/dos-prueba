import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { CommonComponent } from './common/common.component';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from '../core/core-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/http.interceptor';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CommonComponent,
    FooterComponent,  
    HomeComponent,  
    ForbiddenComponent,
    NotFoundComponent  
  ],

  providers:[
AuthInterceptor
  ],

  

  imports: [
   CommonModule,  
   CoreRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   BrowserAnimationsModule,  
   HttpClientModule,
   ComponentsModule,
  
 

    
  ],

  exports: [
    RouterModule,
    CommonComponent,   
    BrowserAnimationsModule,  

    
  ]
})
export class CoreModule { }








  