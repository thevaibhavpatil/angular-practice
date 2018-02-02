import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'yc-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class NgforComponent implements OnInit {
  dataitems:string[]=[
    '1 This one marks',' 2 a DOM element as',' 3 ViewContainer and inserts','4 an embedded view ','5 created by a', '6 template in it without','7 the need to explicitly','8 doing this in component', '9 class. This means','10 that the example','11 above where we','12 created a view' 
  ];

  stars:string[]=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25']
  constructor() { }

  ngOnInit() {
  }

}
