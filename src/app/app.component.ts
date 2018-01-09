import { Component, ViewEncapsulation } from '@angular/core';
import {ButtonComponent } from "./button/button.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'change Name';
  clk:ButtonComponent=new ButtonComponent;
  
  constructor(public btAttr:ButtonComponent){}

  onEventTrigger(event){
    this.title=event;
    console.log('fun isClick works!!!!!!!!!')
  }
  setvalue(){
    this.btAttr.setStyle();
  }
}
