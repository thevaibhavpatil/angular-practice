import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
    <p>
      calc works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
