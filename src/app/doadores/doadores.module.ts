import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemDoadoresComponent } from './listagem-doadores/listagem-doadores.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ListagemDoadoresComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,


  ],
  exports: [ListagemDoadoresComponent]
})
export class DoadoresModule { }
