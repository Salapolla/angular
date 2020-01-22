import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  public mostrar: boolean;

  private datos: {
    nombre: string;
    apellidos: string;
    estatura: number;
    fnacimiento: Date;
  }
  private opciones: Array<Object>;

  opSel: Object = null;

  constructor() {
    this.mostrar = true;
    this.datos = { nombre: "", apellidos: "", estatura: 0, fnacimiento: new Date() }

    this.opciones=[
      {id:1,nombre:"Opción 1"},
      {id:2,nombre:"Opción 2"},
      {id:3,nombre:"Opción 3"},
      {id:4,nombre:"Opción 4"},
      {id:5,nombre:"Opción 5"},
      {id:6,nombre:"Opción 6"}
    ];
  }
  ngOnInit() {
  }

  limpiar() {
    this.datos = { nombre: "", apellidos: "", estatura: 0, fnacimiento: new Date() }
  }

  enviar() {
    alert("aqui enviamos el formulario");
  }

  seleccion(args:any){
    console.log(args);
    console.log("Ahora ponemos el opSel");
    console.log()
  }
}
