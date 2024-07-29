import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { PageLoadingComponent } from './components/page-loading/page-loading.component';



@NgModule({
  declarations: [
    CharacterInfoComponent,
    ToolbarComponent,
    PageLoadingComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatIconModule
  ],
  exports: [
    CharacterInfoComponent,
    ToolbarComponent,
    PageLoadingComponent,
  ]
})
export class SharedModule { }
