import { Injectable, EventEmitter } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DebounceService {
  private searchSubject = new Subject<string>();
  public searchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.searchSubject.pipe(
      debounce(() => timer(500))
    ).subscribe(value => this.searchValueChanged.emit(value));
  }

  public search(value: string) {
    this.searchSubject.next(value);
  }
}
