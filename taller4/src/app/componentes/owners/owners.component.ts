import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { Owner } from 'src/app/modelos/owner';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  public owners: Array<Owner>;
  private valido="OK"

  constructor(private peticion:PeticionService) { 

  }


  eliminar(id){

    this.peticion.deleteOwner(id,this.valido).subscribe(datacos => {
      this.owners=datacos;
      console.log(this.owners);
  });
  }
  ngOnInit() {
    this.peticion.getOwners().subscribe(datacos => {
      this.owners=datacos;
      console.log(this.owners);
  });

}

}
