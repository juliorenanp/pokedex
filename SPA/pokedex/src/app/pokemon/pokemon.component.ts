import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonNumber: number;
  pokemonName: string;
  pokemonType: string;
  pokemonDescription: string;

  constructor() {
    this.pokemonName = 'Suicune';
    this.pokemonType = 'Water';
    this.pokemonDescription = this.recuperarTexto();
    this.pokemonNumber = 250;
  }

  ngOnInit(): void {
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
