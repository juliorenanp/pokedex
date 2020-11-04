import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from './shared/pokemon';

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

    this.http.get<any>(`${this.API}/${number}/`).subscribe(data => this.pokemon = { 
      pokemonDescription: data.name,
      pokemonName: data.name,
      pokemonNumber: data.id,
      pokemonType: data.name    
    });

    console.log(this.pokemon);



    // this work
    //var test = this.http.get<any>(`${this.API}/${number}/`).subscribe(data => console.log(data.name));
    //this.http.get<any>(`${this.API}`).subscribe(data => console.log(data));

    
    // console.log(teste);
    
    console.log('chamou');

   // return this.http.get<Pokemon>(`${this.API}/${number}`).pipe();
  }

}
