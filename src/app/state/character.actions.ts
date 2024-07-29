import { Character, CharacterApiParams } from "../models/rick-and-morty.model";

export class GetCharacters {
  static readonly type = '[Character] Get Characters';
  constructor(public params: CharacterApiParams) {}
}

export class AddFavorite {
  static readonly type = '[Character] Add Favorite';
  constructor(public payload: Character) {}
}

export class RemoveFavorite {
  static readonly type = '[Character] Remove Favorite';
  constructor(public payload: Character) {}
}