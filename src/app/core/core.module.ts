
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosModule } from '../dados/dados.module';
import { DoadoresModule } from '../doadores/doadores.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    DadosModule,
    DoadoresModule
  ]
})
export class CoreModule { }
