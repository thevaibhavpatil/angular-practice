import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataDeleteService {
 
  constructor() {
  
   }
   private _navItemSource = new BehaviorSubject<number>(-1);
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(number) {
    this._navItemSource.next(number);
    // console.log(number);
    
  }
  
}
