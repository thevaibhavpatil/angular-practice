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
  save(user){
    let error = true;   
    const promise = new Promise((resolve, reject) => {
      this.saveUser(user).subscribe(res=>{
        console.log(res);
        // error = res;
        resolve(res);
        reject(error);
      });
    });
    return promise;
    
  }
  fetchUser(id:string){
    return this.http.get('https://httppracticle.firebaseio.com/cust/'+id+'.json');
  }
  fetchUsr(id:string){
    const promise = new Promise((resolve, reject) => {
      this.fetchUser(id).subscribe(res=>{
        console.log(res);
        // error = res;
        // resolve(res);  
        reject('reject works');    
      });
    });
    return promise;
  }
}
