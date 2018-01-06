import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[SignInService]
})
export class loginComponent implements OnInit {

  constructor(private sin:SignInService) { }

  ngOnInit() {
  }
  login(unm:string){
    this.sin.verify(unm);
  }

}
