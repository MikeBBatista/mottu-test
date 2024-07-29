import { Component } from '@angular/core';
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CharacterState } from '../../../state/character.state';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  homeIcon = faHome;
  favIcon = faHeart;
  favoriteCount$: Observable<number>;

  constructor(private store: Store) {
    this.favoriteCount$ = this.store.select(CharacterState.getFavoriteCount);
  }
}
