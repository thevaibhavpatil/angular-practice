import { Injectable } from '@angular/core';

@Injectable()
export class SignInService {

  constructor() { }
  verify(unm:string,pass:string){
    if (unm==='vaibhav' && pass==='vaibhav' ) {
      console.log(`login ${unm} ${pass}`);
      return true;
    } else {
      console.log(`login fail ${unm} ${pass}`);
      return false;
    }
  }
}
