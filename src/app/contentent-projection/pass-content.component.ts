import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pass-content',
  template: `
    <p>
      pass-content works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class PassContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
