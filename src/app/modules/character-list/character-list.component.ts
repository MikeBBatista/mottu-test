import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, filter, Observable, Subscription, take, tap } from 'rxjs';
import { Character, CharacterApiParams } from '../../models/rick-and-morty.model';
import { Store } from '@ngxs/store';
import { CharacterState } from '../../state/character.state';
import { AddFavorite, FilterCharacters, GetCharacters, RemoveFavorite } from '../../state/character.actions';
import { DebounceService } from '../../services/debounce.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit, OnDestroy {
 characters$: Observable<Character[]>;
 favorites$: Observable<Character[]>;
 favoriteCount$: Observable<number>;
 loading$: Observable<boolean>;
 isFavorite$: Observable<(characterId: number) => boolean>;
 totalPages$: Observable<number>;
 error$: Observable<string>;
 private subscription: Subscription;

 
 isFavoriteMap: { [id: number]: boolean } = {};
 nameFilter: string = '';
 page: number = 1;
 noDataTitle: string = 'Nada foi encontrado'
 noDataInfo: string = 'Tente realizar uma nova busca.'

 constructor(private store: Store, private debounceService: DebounceService) {
  this.characters$ = this.store.select(CharacterState.getCharacters);
  this.favorites$ = this.store.select(CharacterState.getFavorites);
  this.favoriteCount$ = this.store.select(CharacterState.getFavoriteCount);
  this.loading$ = this.store.select(CharacterState.isLoading);
  this.isFavorite$ = this.store.select(CharacterState.isFavorite);
  this.totalPages$ = this.store.select(CharacterState.getPages);
  this.error$ = this.store.select(CharacterState.getError);
  this.subscription = this.debounceService.searchValueChanged.subscribe(searchValue => {
    this.page = 1;
    this.nameFilter = searchValue;
    const params: CharacterApiParams = { name: this.nameFilter, page: this.page }
    this.store.dispatch(new FilterCharacters(params));
  });
 }

 ngOnInit(): void {
  console.log('teste');
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

 onSearchValueChanged(searchValue: string) {
    this.page = 1
    this.nameFilter = searchValue;
    const params: CharacterApiParams = { name: this.nameFilter, page: this.page };
    this.store.dispatch(new FilterCharacters(params));
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
             this.loadCharacters();
           }
         })
       )
       .subscribe();
   }
 }

 ngOnDestroy() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}
}