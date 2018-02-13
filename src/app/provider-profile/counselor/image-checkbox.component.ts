import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'helix-image-checkbox',
  template: `
   <!-- <div class="checkBox mt-2" *ngFor="let img of imgs;let i=index">
    <mat-checkbox [labelPosition]="'before'" [disabled]="'disabled'" [checked]="checkStaus[i]" >
      <img [src]="img" class="d-block" alt="">
      </mat-checkbox>
   </div>
   -->
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
    :host  .checkBox{
      flex-basis: 90px;
    }
    :host  mat-checkbox {
      margin-right:10px;
    }
    .checkBox ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {
      background-color: rgb(27, 142, 241) !important;
    }
    .checkBox ::ng-deep  .mat-checkbox-layout{
      flex-flow: column;
    }
    .checkBox ::ng-deep  .mat-ripple-element {
      background: rgba(27, 142, 241, .4) !important;
    }
    .checkBox ::ng-deep .mat-checkbox-label{
      background:#00c8ca;
      border-radius: 50%;
      margin-bottom: 10px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class ImageCheckboxComponent implements OnInit {
  @Input()
  imgs;
  @Input()
  checkStaus;
  constructor() { }

  ngOnInit() {
  }

}
