import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <div>
      <h1>simple angualr component</h1>
    </div>
  `  ,
  styles: [`
    h1{
      border:1px solid red;
    }
  `]
 
})
export class FirstComponent  {

  constructor() { }

  
}
