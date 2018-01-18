import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'yc-toggle-parent',
  template: `
  <yc-toggle-from-parent class="d-block" [tog1]= "tog"></yc-toggle-from-parent>
  <yc-button [name]="'Parent Button'" [color]= "'orange'" (click)="change1()">appComponent</yc-button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ToggleParentComponent implements OnInit {
  tog:boolean=true;
  
  @Input()
  title = true;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    
    console.log(`appComponent before: ${this.tog}`);
    throw new Error("Method not implemented.");
  }

  change1(){
    console.log(`appcomponent before: ${this.tog}`);
    this.tog= !this.tog;
    console.log(`appcomponent after: ${this.tog}`);
  }

}
