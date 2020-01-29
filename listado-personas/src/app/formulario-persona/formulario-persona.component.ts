import { Component, OnInit } from '@angular/core';
import {AjaxServicioService}from '../ajax-servicio.service';
import { Persona} from '../persona';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

public persona:Persona={id:-1,dni:"",nombre:"",apellidos:""};;
private datos:any;
  constructor(private serviciopAjax: AjaxServicioService, private rute:ActivatedRoute) {
    console.log(this.persona.id);
     this.persona.id=this.rute.snapshot.params["id"];
     console.log(this.persona.id); 
     this.serviciopAjax.selPersona(this.persona.id).subscribe(datacos => {
      this.datos=datacos;});
     console.log(this.datos);
  }

  
 

  aceptar(dni,nombre,apellidos){

    if(this.persona.id>=0){
      this.serviciopAjax.modificar(this.persona.id,dni,nombre,apellidos).subscribe(datacos => {
        this.datos=datacos;});
    }else{
    this.serviciopAjax.anadir(dni,nombre,apellidos).subscribe(datacos => {
      this.datos=datacos;});
    }
  }

  ngOnInit() {
  }

}
