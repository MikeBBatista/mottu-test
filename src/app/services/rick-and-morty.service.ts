import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CharacterApiParams } from '../models/rick-and-morty.model';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(params: CharacterApiParams): Observable<any> {
    const { name = '', page = 1 } = params;
    let httpParams = new HttpParams();

    httpParams = httpParams
    .set('name', name)
    .set('page', page);
    
    return this.http.get<any>(`${this.apiUrl}/character`, { params: httpParams }).pipe(
      catchError(this.manageError)
    );
  }

  manageError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Erro do servidor: ${error.status}, ${error.message}`;
    }
    return errorMessage;
  }
}
