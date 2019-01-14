import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonsService {

  //retourne tous les Pokemons
  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  // retourne le pokemon avec l'identifiant passé en parametre
  getPokemon(id: number): Pokemon {
    let pokemons = this.getPokemons();

    for(let index = 0; index < pokemons.length; index++) {
      if(id === pokemons[index].id) {
        return pokemons[index];
      }
    }
  }

  getPokemonTypes(): string[] {
    return ['Plante','Feu','Eau','Insecte','Normal','Electrik','Poison','Fée','Vol'];
  }
}
