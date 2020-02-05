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

  constructor(private peticion:PeticionService) { 

  }

  ngOnInit() {
    this.peticion.getOwners().subscribe(datacos => {
      this.owners=datacos;
      console.log(this.owners);
  });

}

}
