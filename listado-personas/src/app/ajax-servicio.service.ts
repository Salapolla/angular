import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona} from './persona';

@Injectable({
  providedIn: 'root'
})
export class AjaxServicioService {
 
  private url:string='http://localhost/angular/servidor.php';
  
  constructor(private http:HttpClient) {}
  
  //Generamos las funciones que nos serviran para manipular nuestras entidades
  listar() {
    let parametro= JSON.stringify({
      servicio:"listar"
    });
    return this.http.post<Persona[]>(this.url,parametro);
  }
 
}