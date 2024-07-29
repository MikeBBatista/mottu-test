import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Character } from '../models/rick-and-morty.model';
import { AddFavorite, GetCharacters, RemoveFavorite } from './character.actions';
import { RickAndMortyService } from '../services/rick-and-morty.service';

export interface CharacterStateModel {
  characters: Character[];
  favorites: Character[];
  loading: boolean;
  error: string;
  count: number;
  pages: number;
}

@State<CharacterStateModel>({
  name: 'character',
  defaults: {
    characters: [],
    favorites: [],
    loading: false,
    error: '',
    count: 0,
    pages: 42,
  }
})
@Injectable()
export class CharacterState {

  constructor(private rickAndMortyService: RickAndMortyService) {}

  @Selector()
  static getCharacters(state: CharacterStateModel) {
    return state.characters;
  }

  @Selector()
  static getFavorites(state: CharacterStateModel) {
    return state.favorites;
  }

  @Selector()
  static isLoading(state: CharacterStateModel) {
    return state.loading;
  }

  @Selector()
  static getFavoriteCount(state: CharacterStateModel) {
    return state.favorites.length;
  }

  @Selector()
  static getError(state: CharacterStateModel) {
    return state.error;
  }

  @Selector()
  static getPages(state: CharacterStateModel) {
    return state.pages;
  }

  @Selector()
  static isFavorite(state: CharacterStateModel) {
    return (characterId: number) => {
      return state.favorites.some(character => character.id === characterId);
    };
  }

  @Action(GetCharacters)
  getCharacters(ctx: StateContext<CharacterStateModel>, action: GetCharacters) {
    const params = action.params;
    ctx.patchState({ loading: true });

    return this.rickAndMortyService.getCharacters(params).subscribe({
      next: (result) => {
        const currentState = ctx.getState();
        const currentCharacters = currentState.characters || [];
        const updatedCharacters = [...currentCharacters, ...result.results];

        ctx.patchState({ 
          characters: updatedCharacters, 
          loading: false, 
          pages: result.info.pages, 
          count: result.info.count 
        });
      },
      error: (error) => {
        ctx.patchState({ error: error, loading: false });
      }
    });
  }

  @Action(AddFavorite)
  addFavorite(ctx: StateContext<CharacterStateModel>, action: AddFavorite) {
    const state = ctx.getState();
    const updatedFavorites = [...state.favorites, action.payload];
    ctx.patchState({ favorites: updatedFavorites });
  }

  @Action(RemoveFavorite)
  removeFavorite(ctx: StateContext<CharacterStateModel>, action: RemoveFavorite) {
    const state = ctx.getState();
    const updatedFavorites = state.favorites.filter(character => character.id !== action.payload.id);
    ctx.patchState({ favorites: updatedFavorites });
  }
}
