import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosDoadores } from './dados-doadores';

import { take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DadosService {

  pathArquivo = '../../assets/data.json';


  constructor(private http: HttpClient) { }

  getFindAll(): Observable<DadosDoadores[]> {
    return this.http.get<DadosDoadores[]>(this.pathArquivo);
  }

  getDoadores(): Observable<DadosDoadores[]> {
    return this.http.get<DadosDoadores[]>(this.pathArquivo).pipe(take(1));
  }



}
