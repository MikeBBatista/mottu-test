import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { PageLoadingComponent } from './components/page-loading/page-loading.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoDataInfoComponent } from './components/no-data-info/no-data-info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CharacterInfoComponent,
    ToolbarComponent,
    PageLoadingComponent,
    BreadcrumbComponent,
    NoDataInfoComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    CharacterInfoComponent,
    ToolbarComponent,
    PageLoadingComponent,
    BreadcrumbComponent,
    NoDataInfoComponent,
  ]
})
export class SharedModule { }
