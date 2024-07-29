import { Component, OnInit } from "@angular/core";
import { Observable, take } from "rxjs";
import { Character } from "../../models/rick-and-morty.model";
import { CharacterState } from "../../state/character.state";
import { Store } from "@ngxs/store";
import { AddFavorite, RemoveFavorite } from "../../state/character.actions";

@Component({
  selector: 'app-character-favorites',
  templateUrl: './character-favorites.component.html',
  styleUrl: './character-favorites.component.scss'
})
export class CharacterFavoritesComponent {
  favorites$: Observable<Character[]>;
  loading$: Observable<boolean>;
  isFavorite$: Observable<(characterId: number) => boolean>;
  error$: Observable<string>;
  
  noDataTitle: string = 'Nada foi encontrado'
  noDataInfo: string = 'Tente realizar uma nova busca.'

  constructor(private store: Store) {
    this.favorites$ = this.store.select(CharacterState.getFavorites);
    this.loading$ = this.store.select(CharacterState.isLoading);
    this.isFavorite$ = this.store.select(CharacterState.isFavorite);
    this.error$ = this.store.select(CharacterState.getError);
  }

  toggleFavorite(character: Character): void {
    this.isFavorite$
      .pipe(take(1))
      .subscribe(isFavorite => {
        if (isFavorite(character.id)) {
          this.store.dispatch(new RemoveFavorite(character));
        } else {
          this.store.dispatch(new AddFavorite(character));
        }
      });
   }
}