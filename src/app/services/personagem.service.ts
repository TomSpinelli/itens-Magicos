import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Personagem } from '../models/personagem.model';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private readonly API_URL = "http://localhost:3000/personagens";

  constructor(private http: HttpClient) { }

  listar(): Observable<Personagem[]> {
    return this.http.get<Personagem[]>(this.API_URL)
      .pipe(catchError(this.tratarErro));
  }

  buscarPorId(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.API_URL}/${id}`)
      .pipe(catchError(this.tratarErro));
  }

  salvar(personagem: Personagem): Observable<Personagem> {
    return this.http.post<Personagem>(this.API_URL, personagem)
      .pipe(catchError(this.tratarErro));
  }

  atualizar(id: number, personagem: Personagem): Observable<Personagem> {
    return this.http.put<Personagem>(`${this.API_URL}/${id}`, personagem)
      .pipe(catchError(this.tratarErro));
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`)
      .pipe(catchError(this.tratarErro));
  }

  private tratarErro(error: HttpErrorResponse) {
    console.error("Erro na requisição: ", error);
    return throwError(() => new Error("Erro ao processar a requisição"));
  }
}
