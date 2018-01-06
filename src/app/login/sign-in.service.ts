import { Injectable } from '@angular/core';

@Injectable()
export class SignInService {

  constructor() { }
  verify(unm:string){
    if (unm==='vaibhav') {
      console.log('login');
      return true;
    } else {
      console.log('login fail');
      return false;
    }
  }
}
