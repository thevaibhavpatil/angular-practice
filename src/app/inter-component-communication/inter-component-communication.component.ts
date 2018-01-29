import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { DataDeleteService } from './data-delete.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'yc-inter-component-communication',
  templateUrl: './inter-component-communication.component.html',
  styleUrls: ['./inter-component-communication.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class InterComponentCommunicationComponent implements OnInit,OnChanges {

  // item: number;
  // subscription:Subscription;
  index: number;
  delIndex:number;
  subscription:Subscription;
  constructor(private _navService:DataDeleteService) {}
  ngOnInit() {
    // this.subscription = this._navService.navItem$.subscribe(
    //   item => this.item = item)
    this.subscription = this._navService.navItem$
       .subscribe(indx => this.index = indx)
  }
  ngOnChanges(){
    console.log('Inter-component',this.delIndex,this.index);
    
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
  delConform(){
    this.delIndex=this.index;
  }
 
}
