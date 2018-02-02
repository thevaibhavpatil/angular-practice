import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'yc-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class FlexComponent implements OnInit {

  @ViewChild('mainScreen') elementView: ElementRef;
  viewHeight: number;
  
  constructor() {
  }
  ngOnInit(): void {
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
    console.log(this.viewHeight);
  }
  ngAfterViewInit() {
    var height = this.elementView.nativeElement.offsetHeight;
    console.log(height);
} 

  clickMe(){
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
  }
  
}
