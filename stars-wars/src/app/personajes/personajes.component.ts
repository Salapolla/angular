import { Component, OnInit } from '@angular/core';
import { AjaxServicioService } from "../ajax-servicio.service";


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public datos: any = null;
  public listaPer: Object[];
  public datosPlaneta: Object = null;

  constructor(private serviciopAjax: AjaxServicioService) {
    this.serviciopAjax.peticion().subscribe(datacos => {
      this.asignarDatos(datacos);
    })

  }

  private asignarDatos(datos: Object) {
    this.datos = datos;

    this.listaPer = this.datos.results;

  }

  paginacion(url) {
    this.serviciopAjax.peticionDir(url).subscribe(datacos => {
      this.asignarDatos(datacos);
    })
  }

  

  ngOnInit() {
  }

}
