import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { DataDeleteService } from '../data-delete.service';

@Component({
  selector: 'yc-delet-operation',
  templateUrl: './delet-operation.component.html',
  styleUrls: ['./delet-operation.component.less'],
  encapsulation: ViewEncapsulation.None,

})
export class DeletOperationComponent implements OnInit {
  @Input()
  arrIndex:number;
  @Input()
  detectChange:boolean ;
  constructor(private _dataDelete:DataDeleteService) { }

  ngOnInit() {
  }
  // delete(item: number) {
  //   console.log('selected delete item ' + item);
  //   this._dataDelete.changeNav(item);
  // }
  selectedNavItem(item: number) {
    console.log('selected nav item ' + item);
    this._dataDelete.changeNav(item);
  }

}
