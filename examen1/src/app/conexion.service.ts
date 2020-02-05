import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private url:string='http://localhost/angular/servidor.php';
  
  constructor(private http:HttpClient) {}
  
  //Generamos las funciones que nos serviran para manipular nuestras entidades
  listar() {
    let parametro= JSON.stringify({
      servicio:"facturas"
    });
    return this.http.post<any>(this.url,parametro);
  }
 eliminar(id, id_factura){
  let parametro= JSON.stringify({
    servicio:"borra",
    id:id,
    id_factura:id_factura
  });
  return this.http.post<any>(this.url,parametro);
 }
 anadir(detalle){
  let parametro= JSON.stringify({
    servicio:"anade",
    detalle:detalle
  });
  return this.http.post<any>(this.url,parametro);
 }
 modificar(detalle){
  let parametro= JSON.stringify({
    servicio:"modifica",
    detalle:detalle,
    
  });
  return this.http.post<any>(this.url,parametro);
 }
 detalles(id){
  let parametro= JSON.stringify({
    servicio:"detalle",
    id:id
  });
  return this.http.post<any>(this.url,parametro);
 }
}
