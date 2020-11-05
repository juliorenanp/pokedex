import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap, delay, take } from 'rxjs/operators';
import { map } from "rxjs/operators";

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
  ronaldo: any;

  constructor(private service: PokemonService, private http:HttpClient) {

    this.pokemonName = 'Suicune';
    this.pokemonType = 'Water';
    this.pokemonDescription = this.recuperarTexto();
    this.pokemonNumber = 250;
  }

  ngOnInit(): void {
    
    // Is this the wrong way?
    this.http.get<any>(`${this.API}`).subscribe(
      (data) => {
        if(data){
          this.ronaldo = data;
          console.log(this.ronaldo);
        }
      }
    );


  // this.ronaldo =  this.service.first();
  //  console.log(this.ronaldo);

  }

  recuperarFoto() {
     return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png';
  }

  recuperarSprite(){
     return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png';
  }

  recuperarTexto() {
    return 'SUICUNE embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This POKéMON has the power to purify dirty water.'
  }


  // https://pokeapi.co/api/v2/pokemon/245/
  // id: pokemonNumber
  // name: pokemonName

  //https://pokeapi.co/api/v2/pokemon-species/245/
  // flavor_text_entries[0] : pokemonDescription 
}
