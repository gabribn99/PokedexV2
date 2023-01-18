import { Component } from '@angular/core';
import { Pokemon } from '../entity/pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemonList: Pokemon[];

  constructor(private pokemonService: PokemonService) {  }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(
      pokemons => this.pokemonList = pokemons
    );
  }
}