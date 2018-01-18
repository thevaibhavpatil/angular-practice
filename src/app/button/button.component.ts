import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'yc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  public name1;
  @Input () name:string='Button';
  @Input () color ?:string='initial';
  @Input () height ?:string='initial';
  @Input () width ?:string='initial';
  @Input () radious ?:string='initial';
  @Output () onNameChange=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.name1=this.name;
  }
  changeName(){
    this.name1='new Button';
    this.onNameChange.emit('new Button');
  }
  resetName(){
    this.onNameChange.emit('Button');
  }
  setStyleDefault({nm ='Button',hgt='initial',wdt='initial',clr='initial',rdus=""}: {nm:string,clr:string,hgt:string,wdt:string,rdus:string}){
    this.name=nm;
    this.color=clr;
    this.width=wdt;
    this.height=hgt;
    this.radious=rdus;
}
setStyle(nm?:string,clr?:string,hgt?:string,wdt?:string,rdus?:string){
  this.name=nm;
  this.color=clr;
  this.width=wdt;
  this.height=hgt;
  this.radious=rdus;
}
setStyleObj(obj: {nm:string,clr:string,hgt:string,wdt:string,rdus:string}){
  this.name=obj.nm;
  this.color=obj.clr;
  this.width=obj.wdt;
  this.height=obj.hgt;
  this.radious=obj.rdus;
}
}
