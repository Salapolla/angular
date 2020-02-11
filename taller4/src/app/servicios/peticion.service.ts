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
  getVets(){
    let parametro= JSON.stringify({
      accion:"ListarVets"
    });
    return this.http.post<any>(this.url,parametro);
  }

  getOwner(id){
    let parametro= JSON.stringify({
      accion:"ObtenerOwnerId",
      id:id
    });
    return this.http.post<any>(this.url,parametro);
  }

  deleteOwner(id,valido){
    let parametro= JSON.stringify({
      accion:"BorraOwner",
      id:id,
      listado:valido
    });
    return this.http.post<any>(this.url,parametro);
  }
}
