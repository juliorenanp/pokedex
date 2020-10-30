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
    this.nomePokemon = 'Suicune - スイクン';
    this.tipoPokemon = 'Water';
    this.descricaoPokemon = 'Pokemon Baum';
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
    return 'Ditto é um pokemon baum.'
  }

}
