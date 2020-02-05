import { Component, OnInit } from '@angular/core';
import { ConexionService} from '../conexion.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  private tablaFac:any;
  public datos:any=null;

  constructor(private conexion: ConexionService) {
    this.conexion.listar().subscribe(datacos => {
      this.tablaFac=datacos;
      console.log(datacos);
    })
  }

  ngOnInit() {
  }

}
