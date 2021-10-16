import { Injectable } from '@angular/core';
// A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters.
import {Observable, Subject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTAsk: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTAsk = !this.showAddTAsk;
    this.subject.next(this.showAddTAsk)
  }

  onToggle(): Observable<any> {
    // Creates a new Observable with this Subject as the source. You can do this to create customize Observer-side logic of the Subject and conceal it from code that uses the Observable.
    return this.subject.asObservable();
  }

}
