import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { PvdrDetaiStruct } from '../pvdr-detail-struct';

@Component({
  selector: 'helix-pvdr-detail-design1',
  template: `
    <div class="heading">
      <div class="imgWrapper"><img [src]="img" alt=""></div>
      <h5 class="font-weight-bold text-uppercase">{{heading}}</h5>
    </div>
    <div class="mt-2 infoWrapper " *ngFor="let inst of pvrdDetailList;let i=index">
      <div class="detailWrapper">
        <div class="detail my-1">
          <h6 class="position text-uppercase">{{inst.position}}</h6>
          <div class="nmOrg">{{inst.orgName}}</div>
          <div class="duration">{{inst.duration}}</div>
          <div class="location">{{inst.city}}<span *ngIf="inst.cnrty">,{{inst.cnrty}}</span></div>
        </div>
        <div class="spcl my-1" *ngIf="inst.spcl">
          <h6 class="headingSpcl text-uppercase">Specialization</h6>
          <p class="mb-0" *ngFor="let sp of inst.spcl;let i=index">{{sp}}</p>
        </div>
      </div>
    <div class="discription my-1" *ngIf="inst.dscrpt">
      {{inst.dscrpt}}
    </div>
 </div>
  `,
  styleUrls: ['./pvdr-detail-design1.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PvdrDetailDesign1Component implements OnInit {
  @Input() heading: any;
  @Input() img: any;
  @Input() pvrdDetailList: PvdrDetaiStruct;

  constructor() { }

  ngOnInit() {
  }

}
