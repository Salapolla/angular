import { Component, OnInit } from '@angular/core';
import {AjaxServicioService}from '../ajax-servicio.service';
import { Persona} from '../persona';
@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

public pulsado:boolean=true;

public persona:{id:number,dni:string,nombre:string,apellidos:string};
private tablaPer:any;
  constructor(private serviciopAjax: AjaxServicioService) {}

  
  pulsar(){
    this.pulsado=false;
  }

  aceptar(dni,nombre,apellidos){
    this.serviciopAjax.anadir(dni,nombre,apellidos).subscribe(datacos => {
      this.tablaPer=datacos;});
  }

  ngOnInit() {
  }

}
