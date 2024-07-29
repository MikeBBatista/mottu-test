import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { SharedModule } from '../../shared/shared.module';
import { CharacterListRoutingModule } from './character-list-routing.module';



@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharacterListRoutingModule
  ],
  exports: [
    CharacterListComponent,
  ],
})
export class CharacterListModule { }
