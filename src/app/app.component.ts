import { Component } from '@angular/core';
import {ButtonComponent } from "./button/button.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  clk:ButtonComponent;
  isclick(){
    this.clk.is_click();
  }
}
