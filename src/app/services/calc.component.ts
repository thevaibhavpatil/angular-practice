import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-calc',
  template: `
    <div class="jumbotron">
      <input type="button" value="Progress" class="btn btn-primary" (click)="subProg()"/>
    </div>
  `,
  styles: [`
    margin-top :30px;
  `],
  encapsulation: ViewEncapsulation.None
})
export class CalcComponent implements OnInit {

  constructor(
    private progress: LocalStorageService
  ) { }

  ngOnInit() {
  }

  subProg() {
    this.progress.emitProgress(5);
  }
}