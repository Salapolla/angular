import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { OwnersComponent } from './componentes/owners/owners.component';
import { VetsComponent } from './componentes/vets/vets.component';
import {HttpClientModule} from '@angular/common/http';
import { DetalleOwnerComponent } from './componentes/detalle-owner/detalle-owner.component';
import { FormComponent } from './componentes/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    OwnersComponent,
    VetsComponent,
    DetalleOwnerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
