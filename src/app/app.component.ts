import { Component, ViewEncapsulation, Input } from '@angular/core';
import {ButtonComponent } from "./button/button.component";
import { OnChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnChanges {
  
  tog:boolean=true;
  action:any;
  @Input()
  title = true;
  clk:ButtonComponent=new ButtonComponent;
  
  constructor(public btAttr:ButtonComponent){}

  ngOnChanges(): void {
    
    console.log(`appComponent before: ${this.tog}`);
    throw new Error("Method not implemented.");
  }
  
  // change(){
  //   this.title=!this.title;
  // }
  change1(){
    console.log(`appcomponent before: ${this.tog}`);
    this.tog= !this.tog;
    console.log(`appcomponent after: ${this.tog}`);
  }
  onEventTrigger(event){
    this.title=event;
    console.log('fun isClick works!!!!!!!!!')
  }
  setvalue(){
    this.btAttr.setStyle();
  }

  /* code check */
  
}
