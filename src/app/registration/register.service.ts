import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
 

  constructor(private http:HttpClient) { }
  saveUser(user:object){
    return this.http.post('https://httppracticle.firebaseio.com/user.json',user );
  }
}
