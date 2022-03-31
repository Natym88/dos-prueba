import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SedesBuscarComponent } from './sedes-buscar/sedes-buscar.component';



@NgModule({
  declarations: [SedesBuscarComponent],

  
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SearchModule { }
