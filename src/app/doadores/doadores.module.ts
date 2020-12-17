import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemDoadoresComponent } from './listagem-doadores/listagem-doadores.component';


@NgModule({
  declarations: [ListagemDoadoresComponent],
  imports: [
    CommonModule,



  ],
  exports: [ListagemDoadoresComponent]
})
export class DoadoresModule { }
