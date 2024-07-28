import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(params: { [key: string]: any }): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }

    return this.http.get<any>(this.apiUrl, { params: httpParams }).pipe(
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
