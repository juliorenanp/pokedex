import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  nomePokemon: string;
  tipoPokemon: string;
  descricaoPokemon: string;

  constructor() {
  // is this the best way to get pokemons?
    this.nomePokemon = 'Suicune - スイクン';
    this.tipoPokemon = 'Water';
    this.descricaoPokemon = this.recuperarTexto();
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

}
