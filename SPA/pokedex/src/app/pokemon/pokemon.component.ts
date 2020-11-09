import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor(private service: PokemonService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getRandomPokemon();
    //this.service.first(x => console.log(x.data)).subscribe();
  }

  getRandomPokemon(){
    let number = Math.floor(Math.random() * 900);
    this.getPokemon(number);
  }

  getNextPokemon(){
    let pokNumber =++ this.pokemonNumber;
    this.getPokemon(pokNumber);
  }

  getMainPicture(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  getSprite(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getType(id: number) {
    return `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  }

  
  getPokemon(pokNumber: number) {

    this.service.getPokemon(pokNumber)
                .subscribe((data: any)=> {
                this.pokemonName = data.name;
                this.pokemonType = data.types[0].type.name;          
                this.pokemonNumber = data.id;
                this.pokemonPhoto = this.getMainPicture(data.id);
                this.pokemonUrl = this.getSprite(data.id);
    });
  

    // this.http.get<any>(`${this.API}/pokemon/${pokNumber}`).subscribe(
    //   (data) => {
    //     if (data) {
    //       this.pokemonName = data.name;
    //       // need to ng-for types;
    //       this.pokemonType = data.types[0].type.name;          
    //       this.pokemonNumber = data.id;
    //       this.pokemonPhoto = this.getMainPicture(data.id);
    //       this.pokemonUrl = this.getSprite(data.id);
    //     }
    //   }
    //);

    // this.http.get<any>(`${this.API}/pokemon-species/${pokNumber}`).subscribe(
    //   (data) => {
    //     if (data) {
    //       this.pokemonDescription = data.flavor_text_entries[0].flavor_text;
    //     }
    //   }
    // );
  }
}
