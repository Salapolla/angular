import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  private url:string='http://localhost/angular/petclinic/servicios.php';

  constructor(private http: HttpClient) { }

  getOwners(){
    let parametro= JSON.stringify({
      accion:"ListarOwners"
    });
    return this.http.post<any>(this.url,parametro);
  }
}
