import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAgendamentoComponent } from './cadastro-agendamento/cadastro-agendamento.component';
import { ListaAgendamentoComponent } from './lista-agendamento/lista-agendamento.component';

import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CadastroAgendamentoComponent, ListaAgendamentoComponent],
  imports: [
    CommonModule,

    ButtonModule,
    InputTextModule,
    HttpClientModule,
    CalendarModule,
    CardModule
  ]
})
export class AgendamentoModule { }
