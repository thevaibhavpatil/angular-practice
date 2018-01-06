import { Component, OnInit, ViewEncapsulation, Input,Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input () name:string;
  @Input () color ?:string;
  @Input () height ?:string;
  @Input () width ?:string;
  @Input () radious ?:string;
  @Output () btnwidth;
  constructor() { }

  ngOnInit() {
  }

  is_click(){
    console.log('click works');
  }

}
