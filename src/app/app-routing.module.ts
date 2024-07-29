import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/character-list', 
    pathMatch: 'full' 
  },
  {
    path: 'character-list',
    loadChildren: () => import('./modules/character-list/character-list.module').then(m => m.CharacterListModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('./modules/character-favorites/character-favorites.module').then(m => m.CharacterFavoritesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
