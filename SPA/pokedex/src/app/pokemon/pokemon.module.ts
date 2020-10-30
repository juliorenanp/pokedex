import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PokemonComponent } from './pokemon.component';


@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ]
})
export class PokemonModule { }
