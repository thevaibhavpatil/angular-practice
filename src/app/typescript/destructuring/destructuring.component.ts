import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'yc-destructuring',
  templateUrl: './destructuring.component.html',
  styleUrls: ['./destructuring.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DestructuringComponent implements OnInit {
  userInfo: Object;
  baseUrl= 'https://console.firebase.google.com/u/1/project/angularpractice-3586f/database/firestore/data~2FuserDetails~2FpersonalInfo'
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  userDetails(){
    return this.http.get(this.baseUrl).subscribe((data) => {
      this.userInfo = data;
      console.log('this.userInfo ',this.userInfo );
      
    });
  }
}
class UserDtails {
 uNm:string;
 gender:string;
 email:string;
 mobileNo:number;
 cntryCode:number;
}
