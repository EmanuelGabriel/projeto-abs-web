
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosModule } from '../dados/dados.module';
import { DoadoresModule } from '../doadores/doadores.module';
import { AgendamentoModule } from '../agendamento/agendamento.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    DadosModule,
    DoadoresModule,
    AgendamentoModule
  ]
})
export class CoreModule { }
