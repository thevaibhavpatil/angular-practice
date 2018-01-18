import { Component, OnInit, ViewEncapsulation, Input, DoCheck } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'yc-toggle-from-parent',
  templateUrl: './toggle-from-parent.component.html',
  styleUrls: ['./toggle-from-parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ToggleFromParentComponent implements OnInit,OnChanges,DoCheck {

  @Input()
  tog = true;
  @Input()
  tog1: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(`changes in check code`);

    /* code for close opened img tag from parent click*/
    if (this.tog==false) {
      console.log(`in if before: ${this.tog}`);
      this.tog = false;
      this.tog1=false;  
      console.log(`in if after: ${this.tog}`);
    } else{
        if (this.tog==true) {
          console.log(`in else before: ${this.tog}`);
          this.tog = false;
          console.log(`in else after: ${this.tog}`);
        }
    }
  }
  ngDoCheck(){
    
  }
  change() {
    this.tog = !this.tog;
  }

}
