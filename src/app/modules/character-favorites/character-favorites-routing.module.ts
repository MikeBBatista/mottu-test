import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterFavoritesComponent } from './character-favorites.component';

const routes: Routes = [
  { path: '', component: CharacterFavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterFavoritesRoutingModule { }
