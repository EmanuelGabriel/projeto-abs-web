import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAgendamentoComponent } from './cadastro-agendamento/cadastro-agendamento.component';
import { ListaAgendamentoComponent } from './lista-agendamento/lista-agendamento.component';


const routes: Routes = [
  {
    path: 'agendamentos',
    component: ListaAgendamentoComponent
  },

  {
    path: 'agendamentos/novo',
    component: CadastroAgendamentoComponent
  },


  {
    path: 'agendamentos/:codigo',
    component: CadastroAgendamentoComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AgendamentoRoutingModule { }
