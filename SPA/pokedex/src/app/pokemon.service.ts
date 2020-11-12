import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from './shared/pokemon';
import { throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly API = `${environment.API}`;

  constructor(private http: HttpClient) { }

  getPokemon(pokNumber: number) {
    return this.http.get(`${this.API}/pokemon/${pokNumber}`).
      pipe(
        map((data: Pokemon) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      );
  }

  getPokemonDetails(pokNumber: number) {
    return this.http.get<any>(`${this.API}/pokemon-species/${pokNumber}`).
      pipe(
        map((data: Pokemon) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      );
  }

}
