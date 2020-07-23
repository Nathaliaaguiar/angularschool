import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';



const routes: Routes = [
  
  {
    path:"addUser",
    component: FormUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }