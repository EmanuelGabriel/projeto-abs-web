import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { ListaAgendamentoComponent } from './lista-agendamento/lista-agendamento.component';
import { CadastroAgendamentoComponent } from './cadastro-agendamento/cadastro-agendamento.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [CadastroAgendamentoComponent, ListaAgendamentoComponent],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,


    ButtonModule,
    InputTextModule,
    HttpClientModule,
    CalendarModule,
    CardModule,
    TableModule



  ]
})
export class AgendamentoModule { }

