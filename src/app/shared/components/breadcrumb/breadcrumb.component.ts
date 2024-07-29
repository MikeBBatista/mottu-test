import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DebounceService } from '../../../services/debounce.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() title!: string;
  @Input() hasFilter: boolean = false;

  constructor(private debounceService: DebounceService) {}

  onKeyup(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.debounceService.search(input.value);
  }
}
