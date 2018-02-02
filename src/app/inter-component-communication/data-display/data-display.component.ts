import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { DataDeleteService } from '../data-delete.service';

@Component({
  selector: 'yc-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DataDisplayComponent implements OnInit,OnChanges {
  
  @Input()
  confIndex:number=-1;
  @Input()
  toggle:boolean;
  indxDisplay;
  list:string[]=
  [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6'

  ]
  constructor(private _dataDelete ?:DataDeleteService) { }

  ngOnInit() {
    
  }
  ngOnChanges() {
    console.log('OnChanges ');
    console.log('passed index',this.confIndex);
    
    console.log('Array list',this.list);
    if(this.confIndex>-1){
      // this.list[this.confIndex]=null;
      this.list.splice(this.confIndex, 1);
      console.log(this.list);
      // this.confIndex=-1;
      console.log(this.confIndex);
    }else{
      console.log('in else',this.confIndex);
    } 
    
  }

}
