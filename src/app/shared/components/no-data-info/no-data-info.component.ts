import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-no-data-info',
  templateUrl: './no-data-info.component.html',
  styleUrl: './no-data-info.component.scss'
})
export class NoDataInfoComponent {
  @Input() title: string = '';
  @Input() info: string = '';
  @Input() buttonTitle!: string;
  @Output() clickButton = new EventEmitter<any>();

  clickedButton() {
    this.clickButton.emit();
  }
}
