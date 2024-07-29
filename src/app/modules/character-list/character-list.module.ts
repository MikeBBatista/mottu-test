import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CharacterListComponent,
  ],
})
export class CharacterListModule { }
