import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from './shared/pokemon';
import { Observable } from 'rxjs';
import { tap, delay, take } from 'rxjs/operators';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // https://pokeapi.co/api/v2/pokemon/245/
  private readonly API = `${environment.API}`;

  pokemon: Pokemon;
  eva01: any;

  constructor(private http:HttpClient) { }

  first(){
    let number = 245;
    let test = this.firstPokemon();

    // this.http.get<any>(`${this.API}/${number}/`).subscribe(data => this.pokemon = { 
    //   pokemonDescription: data.name,
    //   pokemonName: data.name,
    //   pokemonNumber: data.id,
    //   pokemonType: data.name    
    // });

    // this work
    //var test = this.http.get<any>(`${this.API}/${number}/`).subscribe(data => console.log(data.name));
     

  //  return (this.http.get<any>(`${this.API}`).pipe(take(1)));

  // return this.http.get<Object>(`${this.API}`).subscribe(
  //       (data) => {
  //         if(data){
  //           this.eva01 = data;
  //           // console.log(this.eva01);
  //         }
  //       }
  //     );
      
  return this.http.get<object>(`${this.API}`).pipe(delay(1000), tap(console.log));

  }


  firstPokemon(): Observable<Pokemon[]>{
    const url = 'https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/pokemon/245/'
    return this.http
    .get(url)
    .pipe(
      map((data: any[]) =>
        data.map(
          (item: any) =>
            new Pokemon(item.id, item.name, item.name, item.name)
        )
      )
    );
  }
}