import { Component, OnInit } from '@angular/core';
import { HttpAccessService, Test } from '../http-access.service';

@Component({
  selector: 'app-first',
  template: `
    <div *ngFor="let item of value" >
      <h1> {{item.value1}} </h1>
    </div>
  `  ,
  styles: [`
    h1{
      border:1px solid red;
    }
  `],
  providers:[HttpAccessService]
 
})
export class FirstComponent implements OnInit  {

  value:Test;
  val;
  constructor(private httpAccessService:HttpAccessService) { }
  ngOnInit(){
    // this.httpAccessService.doGET().subscribe(data => this.value = {
    //     value1 : data['0'].properties.comment,
    //     value2 : data['0'].properties.eTag,
    //     value3 : data['0'].properties.expires,
    //     value4 : data['0'].properties.hitCount,
    //     value5 : data['0'].properties.lastAccess
    // })
    this.httpAccessService.doGET().subscribe((data) =>{ 
      this.value =data;
      /*  {
            value1 : data['0'],
            value2 : data['0'],
            value3 : data['0'],
            value4 : data['0'],
            value5 : data['0']
        } */
        console.log('data resived',this.value);      
    });
  }
  
}


