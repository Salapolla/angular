import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { Componente1Component } from './componente1/componente1.component';

import{FormsModule}from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    Componente1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
