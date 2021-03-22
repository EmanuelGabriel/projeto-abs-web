import { Component, OnInit } from '@angular/core';

import { DadosDoadores } from './../dados-doadores';
import { DadosService } from '../dados.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cadastro-dados',
  templateUrl: './cadastro-dados.component.html',
  styleUrls: ['./cadastro-dados.component.css']
})
export class CadastroDadosComponent implements OnInit {

  dadosDoadores: DadosDoadores[];
  dadoDoadores = new DadosDoadores();
  loading: boolean;

  constructor(
    private dadosService: DadosService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }


  exibirSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  getDadosDoadores() {
    this.spinner.show();
    this.dadosService.getFindAll().subscribe(resposta => {
      this.dadosDoadores = resposta;
      this.spinner.hide();
      console.log(resposta);
    });
  }


  getFindAll() {
    this.dadosService.getDoadores().subscribe(resp => {
      this.dadosDoadores = resp;
      console.log(resp);
    });
  }



}
