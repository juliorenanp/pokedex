import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap, delay, take } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Pokemon } from '../shared/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  private readonly API = `${environment.API}`;

  pokemonNumber: number;
  pokemonName: string;
  pokemonType: string;
  pokemonDescription: string;
  pokemonPhoto: string;
  pokemonUrl: string;
 
  constructor(private service: PokemonService, private http:HttpClient) {
    // this.pokemonName = 'Suicune';
    // this.pokemonType = 'Water';
    // this.pokemonDescription = this.recuperarTexto();
    // this.pokemonNumber = 250;
  }

  ngOnInit(): void {
    let number = Math.floor(Math.random() * 800);     

    // wrong way..
    this.http.get<any>(`${this.API}/${number}`).subscribe(
      (data) => {
        if(data){          
          this.pokemonName = data.name;
          this.pokemonType = data.id;
          this.pokemonDescription = data.name;
          this.pokemonNumber = data.id;
          this.pokemonPhoto = this.recuperarFoto(data.id);
          this.pokemonUrl = this.recuperarSprite(data.id);
        }
      }
    );

   //this.test =  this.service.first().subscribe();
  
  }

  recuperarFoto(id: number = 245) {
     return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  recuperarSprite(id: number = 245){
     return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  recuperarTexto() {
    return 'SUICUNE embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This POKéMON has the power to purify dirty water.'
  }

  //TO-DO
  getType(id: number){
    return `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  }

  // https://pokeapi.co/api/v2/pokemon/245/
  // id: pokemonNumber
  // name: pokemonName

  //https://pokeapi.co/api/v2/pokemon-species/245/
  // flavor_text_entries[0] : pokemonDescription 
}
