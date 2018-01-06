import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-collect-content',
  template: `
    <div class="container-fluid">
      <input type="text" #iptxt>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class CollectContentComponent implements OnInit {
  @ViewChild ('text') text:ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
