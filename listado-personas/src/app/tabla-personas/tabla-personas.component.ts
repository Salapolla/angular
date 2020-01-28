import { Component, OnInit } from '@angular/core';
import {AjaxServicioService}from '../ajax-servicio.service';
@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css']
})
export class TablaPersonasComponent implements OnInit {
  private tablaPer:any;
  public datos:any=null;
  public pulsar:boolean=true;

  constructor(private serviciopAjax: AjaxServicioService) {
    this.serviciopAjax.listar().subscribe(datacos => {
      this.tablaPer=datacos;
      console.log(datacos);
    })
  }

eliminar(id){
  this.serviciopAjax.eliminar(id).subscribe(datacos => {
    this.tablaPer=datacos;});
}
pulsado(){
  this.pulsar=false;
}
  ngOnInit() {
  }

}
