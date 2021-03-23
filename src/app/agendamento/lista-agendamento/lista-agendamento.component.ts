
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-agendamento',
  templateUrl: './lista-agendamento.component.html',
  styleUrls: ['./lista-agendamento.component.css']
})
export class ListaAgendamentoComponent implements OnInit {

  agendamentos: [] = [];
  dados: any[];
  totalDados = 0;
  first = 0;
  rows = 10;

  loading: boolean;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisar agendamento');
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.first === (this.dados.length - this.rows);
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }


  exibirDados() {
    this.dados = [
      { codigo: 1, nome: 'Culto de consagração', local: 'IASD CENTRAL DE TERESINA', data: '24/03/2021', horaInicio: '09:00', horaTermino: '11:20' },
      { codigo: 2, nome: 'Culto de Sábado', local: 'IASD CENTRAL DE TERESINA', data: '27/03/2021', horaInicio: '09:00', horaTermino: '11:00' },
      { codigo: 3, nome: 'Culto de Domingo', local: 'IASD CENTRAL DE TERESINA', data: '03/04/2021', horaInicio: '09:00', horaTermino: '11:00' },
      { codigo: 4, nome: 'Culto de Quartas especiais', local: 'IASD CENTRAL DE TERESINA', data: '04/04/2021', horaInicio: '17:00', horaTermino: '19:00' },
      { codigo: 5, nome: 'Culto de Sábado', local: 'IASD CENTRAL DE TERESINA', data: '10/04/2021', horaInicio: '09:00', horaTermino: '11:00' },
      { codigo: 6, nome: 'Culto de Domingo', local: 'IASD CENTRAL DE TERESINA', data: '11/04/2021', horaInicio: '19:30', horaTermino: '20:00' },
      { codigo: 7, nome: 'Culto de consagração', local: 'IASD CENTRAL DE TERESINA', data: '14/04/2021', horaInicio: '19:30', horaTermino: '20:00' },
      { codigo: 8, nome: 'Culto de consagração', local: 'IASD CENTRAL DE TERESINA', data: '17/04/2021', horaInicio: '19:30', horaTermino: '20:30' },
      { codigo: 9, nome: 'Culto de Quarta', local: 'IASD CENTRAL DE TERESINA', data: '17/04/2021', horaInicio: '08:30', horaTermino: '11:30' },
      { codigo: 10, nome: 'Culto de Domingo', local: 'IASD CENTRAL DE TERESINA', data: '17/04/2021', horaInicio: '17:00', horaTermino: '19:00' }
    ];
    console.log(this.dados);
  }



}
