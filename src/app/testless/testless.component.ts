import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'yc-testless',
  templateUrl: './testless.component.html',
  styleUrls: ['./testless.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TestlessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
