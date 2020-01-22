import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba1';
  otroAtributo:String="Esto es un string";


  cambiar(){
    this.otroAtributo ="¡jajajaa!";
  }
}
