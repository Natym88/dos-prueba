import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errors = new Subject<Array<string>>();

  constructor() {
  }

  pushErrors(errors: Array<string>) {
    this.errors.next(errors);
  }

  clean() {
    this.errors.next(new Array<string>());
  }
}
