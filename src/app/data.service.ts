import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

   private names = new BehaviorSubject<any>(['Mahesh', 'Mahi']);
   name = this.names.asObservable();

  constructor() { }
   changeName(name) {
     this.names.next(name);
   }
}
