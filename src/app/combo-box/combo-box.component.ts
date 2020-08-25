import { Component, OnInit } from '@angular/core';
//Agregar las siguientes modulos
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
@Component({
 selector: 'app-combo-box',
 templateUrl: './combo-box.component.html',
 styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
//crear las siguientes variables
unidades;
opcionSeleccionado: string ;
galon:number;
valorconversion:number;
valor:string;
regular:number;
especial:number;
dicel:number;
 constructor() {
}
ngOnInit() {
//inicializar las variables
this.unidades = ["regular","especial","disel"];
this.opcionSeleccionado="Selecciona";
this.galon=0;
this.valorconversion=0;
this.valor;
this.especial=4.25;
this.regular=4.05;
this.dicel=3.96;
}
//funcion que realiza los calculos
capturar() {
  
if(this.galon>=0.05&&this.galon<=150){
  switch(this.opcionSeleccionado){
    case'regular':
    this.valorconversion=this.galon*this.regular;
    break;
    case'especial':
    this.valorconversion=this.galon*this.especial;
    break;
    case'disel':
    this.valorconversion=this.galon*this.dicel;
    break;
   
    }
}else{
  this.valorconversion=0;
  this.valor="Solo se permite una capacidad de venta de 0.05 a 150 galones";
}


}
}
export class AppComponent {
}