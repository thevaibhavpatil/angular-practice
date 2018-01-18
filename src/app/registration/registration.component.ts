import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[RegisterService]
})
export class RegistrationComponent implements OnInit {
  constructor(
    private userData:RegisterService
  ) { }
  formData:{};
  ngOnInit() {
  }

  signUp(form:NgForm){
   this.formData=form.value;
   console.log(this.formData);
   this.userData.saveUser(this.formData).subscribe();
  }

}
