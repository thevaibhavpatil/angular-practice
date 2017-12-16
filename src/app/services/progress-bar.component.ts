import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <p>
      progress-bar works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
