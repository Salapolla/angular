import { Component, OnInit } from '@angular/core';
import {AjaxServicioService}from '../ajax-servicio.service';
@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css']
})
export class TablaPersonasComponent implements OnInit {
  private tablaPer:Object[];
  public datos:any=null;

  constructor(private serviciopAjax: AjaxServicioService) {
    this.serviciopAjax.listar().subscribe(datacos => {
      this.asignarDatos(datacos);
      console.log(datacos);
    })
  }


  private asignarDatos(datos: Object) {
    this.datos = datos;
    this.tablaPer=this.datos.listar;
  }
  ngOnInit() {
  }

}
