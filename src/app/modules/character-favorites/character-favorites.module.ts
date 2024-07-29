import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFavoritesComponent } from './character-favorites.component';
import { SharedModule } from '../../shared/shared.module';
import { CharacterFavoritesRoutingModule } from './character-favorites-routing.module';



@NgModule({
  declarations: [CharacterFavoritesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CharacterFavoritesRoutingModule
  ],
  exports: [
    CharacterFavoritesComponent
  ]
})
export class CharacterFavoritesModule { }
