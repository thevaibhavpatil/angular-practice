import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* coustom decoretor  start*/
function Console(target) {
	console.log(target);
}

@Console
class ExampleClass {
  title:string='hiiii this is custom decoretor';
	constructor() {
  	console.log(this.title);
  }
}

/* coustom decoretor  End*/

@Component({
  selector: 'yc-custom-decoretors',
  templateUrl: './custom-decoretors.component.html',
  styleUrls: ['./custom-decoretors.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CustomDecoretorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
