import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'yc-state-pattern',
  templateUrl: './state-pattern.component.html',
  styleUrls: ['./state-pattern.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class StatePatternComponent implements OnInit {
  formData: any;
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  action: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      language: new FormControl()
    });

    this.sub = this.route.params.subscribe(params => {
      this.action = params['flag']; // (+) converts string 'id' to a number 
      //+params['flag'];
      // In a real app: dispatch action to load the details here.
      console.log('this.action', this.action);
      if (this.action === 'edit') {
        this.edit();
        return;
      }
      this.create();
    });
  }
  edit() {
    console.log('Edit Start');
    this.myform.controls.email.disable();
    this.http.get('../assets/state-pattern.json').subscribe(data => {
      this.formData = data;
      console.log('Json data', data, this.formData);
      // this.myform.setValue({
      //   password: 'efgdjhg',
      //   language: 'English'
      // });
      // this.myform.controls['firstName'].patchValue(this.formData.name.firstName);
      // this.myform.controls['lastName'].setValue(this.formData.name.lastName);
      this.myform.controls['email'].patchValue(this.formData.email);
      this.myform.controls['language'].patchValue(this.formData.language);
      this.myform.controls['password'].setValue(this.formData.password);
      console.log('form Edited !!!!!!!!!!', this.myform);

    })
  }
  create() {
    console.log('create Start');
    this.myform.reset();
    this.myform.controls.email.enable();
  }
  ngOnDestroy() {
    console.log('destroy done!!!!!!!!!', this.sub);

    this.sub.unsubscribe();
  }
}
