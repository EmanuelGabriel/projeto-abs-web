
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosModule } from '../dados/dados.module';
import { AgendamentoModule } from '../agendamento/agendamento.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    DadosModule,
    AgendamentoModule
  ]
})
export class CoreModule { }
