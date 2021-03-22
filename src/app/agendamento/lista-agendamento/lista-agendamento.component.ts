import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-agendamento',
  templateUrl: './lista-agendamento.component.html',
  styleUrls: ['./lista-agendamento.component.css']
})
export class ListaAgendamentoComponent implements OnInit {

  agendamentos: [] = [];
  loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
