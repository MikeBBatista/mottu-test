import { Component } from '@angular/core';
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  homeIcon = faHome;
  favIcon = faHeart;
}
