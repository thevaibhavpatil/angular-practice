import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-jambo',
  template: `
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <div class="paratoggle" [ngClass]=" {'show':tg} " >
        <p>
          It uses utility classes for typography and spacing to space content out within the larger container.
          It uses utility classes for typography and spacing to space content out within the larger container.
          It uses utility classes for typography and spacing to space content out within the larger container.
          It uses utility classes for typography and spacing to space content out within the larger container.
          It uses utility classes for typography and spacing to space content out within the larger container.
          It uses utility classes for typography and spacing to space content out within the larger container.
        </p>
      </div>
      <p class="lead">
        <a class="btn btn-primary btn-lg"  role="button" (click)="toggle()" >Learn more </a>
      </p>
  </div>
  `,
  styles: [`
  :host-context(.act) h1 {
    display: block;
    background:  red;
  }
  :host .paratoggle.show{
    height:auto;
    overflow:auto;
  }
  :host .paratoggle{
    height:50px;
    overflow:hidden;
  }
  :host-context(.testClass) h1 {
    display: block;
    background:  lightblue;
  }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class JamboComponent implements OnInit {
  
  tg:boolean;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.tg=!this.tg;
  }
}
