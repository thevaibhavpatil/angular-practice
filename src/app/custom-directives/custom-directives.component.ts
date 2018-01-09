import { Component, OnInit, ViewEncapsulation,Directive, OnChanges,ElementRef} from '@angular/core';
@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CustomDirectivesComponent implements OnInit,OnChanges{
  title='default value';
  
  constructor(private nm:ElementRef) { }

  ngOnInit() {
    console.log(this.title); 
    this.nm.nativeElement.value='abc';
    console.log(this.nm.nativeElement);   
  }
  ngOnChanges() {
    console.log(this.title); 
  }

}
