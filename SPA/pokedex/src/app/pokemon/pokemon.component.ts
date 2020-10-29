import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recuperarFoto() {
    // TODO  get pokemon pictures on https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png passing {{number}}
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png';
  }

  // foto: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png';
  
}
