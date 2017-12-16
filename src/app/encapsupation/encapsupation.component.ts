import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsupation',
  templateUrl: './encapsupation.component.html',
  styleUrls: ['./encapsupation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EncapsupationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
