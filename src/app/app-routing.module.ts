import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroDadosComponent } from './dados/cadastro-dados/cadastro-dados.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'agendamentos',
    pathMatch: 'full'
  },

  {
    path: 'dados',
    component: CadastroDadosComponent
  },

  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
