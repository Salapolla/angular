import { Component, OnInit } from '@angular/core';
import { PeticionService} from 'src/app/servicios/peticion.service';
import { Vet} from 'src/app/modelos/vet';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  public vets: Array<Vet>;

  constructor(private peticion:PeticionService) { }

  ngOnInit() {
    this.peticion.getVets().subscribe(datacos => {
      this.vets=datacos;
    });
  }

}
