import { Component, HostListener, OnInit } from '@angular/core';
import { combineLatest, filter, Observable, take, tap } from 'rxjs';
import { Character, CharacterApiParams } from '../../models/rick-and-morty.model';
import { Store } from '@ngxs/store';
import { CharacterState } from '../../state/character.state';
import { AddFavorite, GetCharacters, RemoveFavorite } from '../../state/character.actions';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit {
 characters$: Observable<Character[]>;
 favorites$: Observable<Character[]>;
 favoriteCount$: Observable<number>;
 loading$: Observable<boolean>;
 isFavorite$: Observable<(characterId: number) => boolean>;
 totalPages$: Observable<number>;
 error$: Observable<string>;

 
 isFavoriteMap: { [id: number]: boolean } = {};
 nameFilter: string = '';
 page: number = 1;

 constructor(private store: Store) {
  this.characters$ = this.store.select(CharacterState.getCharacters);
  this.favorites$ = this.store.select(CharacterState.getFavorites);
  this.favoriteCount$ = this.store.select(CharacterState.getFavoriteCount);
  this.loading$ = this.store.select(CharacterState.isLoading);
  this.isFavorite$ = this.store.select(CharacterState.isFavorite);
  this.totalPages$ = this.store.select(CharacterState.getPages);
  this.error$ = this.store.select(CharacterState.getError);
 }

 ngOnInit(): void {
  this.loadCharacters();
  this.isFavorite$.subscribe(isFavoriteFn => {
   this.characters$.subscribe(characters => {
     characters.forEach(character => {
       this.isFavoriteMap[character.id] = isFavoriteFn(character.id);
     });
   });
 });
 }

 loadCharacters(): void {
  const params: CharacterApiParams = { name: this.nameFilter, page: this.page };
  this.store.dispatch(new GetCharacters(params));
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
 
 @HostListener('window:scroll', ['$event'])
 onScroll() {
   const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
   const windowHeight = window.innerHeight;
   const documentHeight = document.documentElement.scrollHeight;
   const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;

   if (scrollPercentage >= 0.99) {
     combineLatest([this.loading$, this.totalPages$])
       .pipe(
         filter(([isLoading, totalPages]) => !isLoading && this.page <= totalPages),
         take(1),
         tap(([_, totalPages]) => {
           if (this.page < totalPages) {
             this.page += 1;
             console.log(this.page);
             this.loadCharacters();
           }
         })
       )
       .subscribe();
   }
 }
}