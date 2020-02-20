import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { Owner } from 'src/app/modelos/owner';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private owner:Owner;
  private textoBoton:String;


  constructor(private peticion:PeticionService, private route: ActivatedRoute, private ruta:Router) {
    if(this.textoBoton=="Añadir"){
    this.owner=<Owner>{};
  }else{
    this.owner={id:this.route.snapshot.params["id"], firstName:this.owner.firstName, lastName:this.owner.lastName, address:this.owner.address, city:this.owner.city, telephone:this.owner.telephone, pets:this.owner.pets};
  }

   }


  anadirModificar(nombre, apellidos,direccion, ciudad, telefono, mascotas){
    if(this.textoBoton=="Añadir"){
    this.owner= {id:null ,firstName:nombre,lastName:apellidos, address:direccion, city:ciudad, telephone:telefono, pets:mascotas};
    this.peticion.anadirOwner(this.owner).subscribe();
    }
    if(this.textoBoton=="Modificar"){
      this.peticion.modificarOwner(this.owner).subscribe();
    }
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if(id == -1)
      this.textoBoton = "Añadir";
    else{
      this.textoBoton = "Modificar";
     
    }
  }

}
