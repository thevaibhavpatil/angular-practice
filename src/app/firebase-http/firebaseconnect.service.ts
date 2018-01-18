import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirebaseconnectService {

  constructor(private http:HttpClient) { }

  saveUser(user:User){
    return this.http.post('https://httppracticle.firebaseio.com/cust.json',user );
  }
  fetchUser(id:string){
    return this.http.get('https://httppracticle.firebaseio.com/cust/'+id+'.json');
  }
}
