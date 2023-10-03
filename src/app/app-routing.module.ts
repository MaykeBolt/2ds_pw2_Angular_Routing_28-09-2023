import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { LoginComponent } from './components/login/login.component';
import { CadUsuariosComponent } from './components/cad-usuarios/cad-usuarios.component';

const routes: Routes = [
  { path: '', component: MainscreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'caduser', component: CadUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
