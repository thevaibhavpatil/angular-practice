import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FirebaseconnectService } from './firebaseconnect.service';
import { User } from './user';

@Component({
  selector: 'app-firebase-http',
  templateUrl: './firebase-http.component.html',
  styleUrls: ['./firebase-http.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FirebaseHttpComponent implements OnInit {
  @Input()
  userNm;
  @Input()
  password;
  updatedstockvalue;
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
    // this.userData.saveUser(user).subscribe(res=>console.log(res));
    this.userData.save(user).then((resolve) => {
      this.userNm  = resolve;
      console.log('this.userNm', this.userNm);
    },(reject) => {
      this.password  = reject;
      console.log('reject', reject);
    })
  }
  getUser(id:string){
    this.userData.fetchUsr(id).then((resolve) => {
      this.userNm  = resolve['username'];
      this.password  = resolve['password'];
      console.log('resolve this.userNm', this.userNm);
    },(reject) => {
      this.password  = reject;
      console.log('reject this.userNm', this.userNm);
    })
    // this.userData.fetchUser(id).subscribe(res=>console.log(res));
  }

}
