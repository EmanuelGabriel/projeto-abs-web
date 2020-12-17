import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroDadosComponent } from './cadastro-dados/cadastro-dados.component';

import { NgxSpinnerModule } from 'ngx-spinner';

// Componentes do PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';

import { TableModule } from 'primeng/table';


import { DadosService } from './dados.service';


@NgModule({
  declarations: [CadastroDadosComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    TableModule,
    DataViewModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    NgxSpinnerModule

  ],
  exports: [CadastroDadosComponent],
  providers: [DadosService]
})
export class DadosModule { }
