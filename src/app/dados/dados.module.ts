import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroDadosComponent } from './cadastro-dados/cadastro-dados.component';


import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';


@NgModule({
  declarations: [CadastroDadosComponent],
  imports: [
    BrowserModule,
    CommonModule,

    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    FileUploadModule,

    MatBottomSheetModule


  ],
  exports: [CadastroDadosComponent]
})
export class DadosModule { }
