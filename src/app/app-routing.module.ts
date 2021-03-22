import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAgendamentoComponent } from './agendamento/lista-agendamento/lista-agendamento.component';
import { CadastroDadosComponent } from './dados/cadastro-dados/cadastro-dados.component';
import { ListagemDoadoresComponent } from './doadores/listagem-doadores/listagem-doadores.component';
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
