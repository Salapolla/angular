import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TablaPersonasComponent } from './tabla-personas/tabla-personas.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TablaPersonasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'listado', component: TablaPersonasComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
