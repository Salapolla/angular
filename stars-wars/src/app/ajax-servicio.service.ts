import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AjaxServicioService {

  private urlPersonajes: string = "https://swapi.co/api/people/?format=json";
  public datos: any = null;
  constructor(private http: HttpClient) {
    this.http.get(this.urlPersonajes).subscribe(datacos => {
      this.datos = datacos;
   })
  }


  peticion() {
    return this.http.get(this.urlPersonajes);
  }
  
  peticionDir(url){
    return this.http.get(url);
  }
}