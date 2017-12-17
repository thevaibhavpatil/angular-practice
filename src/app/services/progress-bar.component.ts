import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { LocalStorageService } from './local-storage.service'

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        [style.width]="progPer"
        aria-valuemin="0"
        aria-valuemax="100">{{progPer}}</div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent implements OnInit {

  prog = 0;
  progPer = '0%';

  constructor(
    private progress: LocalStorageService
  ) { }

  ngOnInit() {
    this.progress.subscribeProgress(prog => {
      if (this.prog<=100) {
        this.prog += prog;
        this.progPer = `${this.prog}%`;
      }
      else{
        this.progPer="its done 100%";
      }
    });
  }
}