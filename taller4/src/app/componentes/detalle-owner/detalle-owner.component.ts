import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { Owner } from 'src/app/modelos/owner';
import{ ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detalle-owner',
  templateUrl: './detalle-owner.component.html',
  styleUrls: ['./detalle-owner.component.css']
})
export class DetalleOwnerComponent implements OnInit {

  public owner:Owner;
  private owner_id:number;

  constructor(private peticion:PeticionService, private router: ActivatedRoute) { 
    this.owner= <Owner>{};
    this.owner_id=this.router.snapshot.params['id'];

  }

  ngOnInit() {
    
    this.peticion.getOwner(this.owner_id).subscribe(datacos => {
      this.owner=datacos;
      console.log(this.owner);
  });

}

}
