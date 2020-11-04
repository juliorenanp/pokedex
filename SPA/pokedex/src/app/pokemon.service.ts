import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from './shared/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // https://pokeapi.co/api/v2/pokemon/245/
  private readonly API = `${environment.API}`;

  pokemon: Pokemon;

  constructor(private http:HttpClient) { }

  first(){
    let number = 245;
    let test = this.firstPokemon();

    console.log(test);

    this.http.get<any>(`${this.API}/${number}/`).subscribe(data => this.pokemon = { 
      pokemonDescription: data.name,
      pokemonName: data.name,
      pokemonNumber: data.id,
      pokemonType: data.name    
    });

    // this work
    //var test = this.http.get<any>(`${this.API}/${number}/`).subscribe(data => console.log(data.name));
    //this.http.get<any>(`${this.API}`).subscribe(data => console.log(data));

  }


  firstPokemon(): Observable<any>{
    const url = 'https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/pokemon/245/'
    return this.http.get(url);
  }

}
