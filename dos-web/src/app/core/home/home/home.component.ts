import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  turnos = true;
  cartilla = false;
  farmacias = false;
  laboratorios = false;


  verFormTur(){
     this.turnos = true;
     this.cartilla = false;
     this.farmacias = false;
     this.laboratorios = false;
  }

  verFormPres(){
    this.turnos = false;
    this.cartilla = true;
    this.farmacias = false;
    this.laboratorios = false;
  }


  verFormFar(){
    this.turnos = false;
    this.cartilla = false;
    this.farmacias = true;
    this.laboratorios = false;
  }

  verFormLab(){
    this.turnos = false;
    this.cartilla = false;
    this.farmacias = false;
    this.laboratorios = true;
  }
  
 



  constructor() { }

  ngOnInit() {
  }

}
