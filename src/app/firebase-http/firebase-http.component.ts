import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseconnectService } from './firebaseconnect.service';
import { User } from './user';

@Component({
  selector: 'app-firebase-http',
  templateUrl: './firebase-http.component.html',
  styleUrls: ['./firebase-http.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FirebaseHttpComponent implements OnInit {

  constructor(
    private userData:FirebaseconnectService
  ) { }

  ngOnInit() {
  }

  addUser(unm:string,pass:string){
    let user:User=new User();
    user.username=unm;
    user.password=pass;
    console.log(user.username);
    console.log(user.password)
    this.userData.saveUser(user).subscribe(res=>console.log(res));
  }
  getUser(id:string){
    this.userData.fetchUser(id).subscribe(res=>console.log(res));
  }

}
