import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AjaxServicioService {

  constructor(private http:HttpClient) {}
  //Generamos las funciones que nos serviran para manipular nuestras entidades
  listar() {
    return this.http.get('http://localhost/angular/servidor.php');
  }
  detallar(id: number) {
    return this.http.get('http://localhost/angular/servidor.php?opcion=3' + id);
  }
  guardar(item: Object) {
    return this.http.post('http://localhost/angular/servidor.php?opcion=3', item);
  } 
  modificar(item: Object) {
    return this.http.post('http://localhost/angular/servidor.php?opcion=3', item);
  }
  eliminar(id: number) {
    throw new Error("Method not implemented.");
  }
}