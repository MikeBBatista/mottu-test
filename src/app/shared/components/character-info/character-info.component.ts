import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../models/rick-and-morty.model';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.scss'
})
export class CharacterInfoComponent {
  @Input() character!: Character;
  @Input() isFavorite: boolean = false;
  @Output() favCharater: EventEmitter<any> = new EventEmitter();

  favIconClick() {
    this.favCharater.emit(this.character);
  }
}
