import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  //Injetando HtppClient
  constructor(private http: HttpClient) { }

  listar(): Observable<Filme[]>{
    return this.http.get<Filme[]>(`${environment.apiEndpoint}/filme`);
  }

  inserir(filme: Filme): Observable<Filme> {
     return this.http.post<Filme>(`${environment.apiEndpoint}/filme`, filme);
  }

  remover(id: number): Observable<any> {
    return this.http.delete(`${environment.apiEndpoint}/filme/${id}`);
  }

  atualizar(filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(`${environment.apiEndpoint}/filme/${filme.id}`, filme);  }
}
