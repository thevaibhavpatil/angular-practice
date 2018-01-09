import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-jambo',
  template: `
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
  </div>
  `,
  styles: [`
  :host-context(.act) h1 {
    display: block;
    background:  red;
  }
  :host-context(span) h1 {
    display: block;
    background:  lightblue;
  }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class JamboComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
