import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './app/pokemons/detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService)  { }

  ngOnInit(): void {
    // recuperer l'id passé en param
    let id = +this.route.snapshot.paramMap.get('id');
    // maintenant on recupere un observable auquel on peut souscrire
    this.pokemonsService.getPokemon(id)
    .subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
		this.router.navigate(['/pokemons']);
	}

  goEdit(pokemon: Pokemon): void {
    let link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

}
