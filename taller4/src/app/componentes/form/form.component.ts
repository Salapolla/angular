import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { Owner } from 'src/app/modelos/owner';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private owner:Owner;
  private anadirM;
  private idOwner;


  constructor(private peticion:PeticionService) {
    this.owner=<Owner>{};
   }


  anadir(nombre, apellidos,direccion, ciudad, telefono, mascotas){
    this.owner= {id:null ,firstName:nombre,lastName:apellidos, address:direccion, city:ciudad, telephone:telefono, pets:mascotas};
    this.peticion.anadirOwner(this.owner).subscribe();
  }

  ngOnInit() {
  }

}
