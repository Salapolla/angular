import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent} from './componentes/inicio/inicio.component';
import { VetsComponent } from './componentes/vets/vets.component';
import { OwnersComponent } from './componentes/owners/owners.component';
import { DetalleOwnerComponent } from './componentes/detalle-owner/detalle-owner.component';
import { FormComponent} from './componentes/form/form.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"owners", component: OwnersComponent},
  {path:"vets", component: VetsComponent},
  {path:"owners/owner/:id", component: DetalleOwnerComponent},
  {path:"owners/anadirModificar", component: FormComponent},
  {path:"owners/anadirModificar/:id", component: FormComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
