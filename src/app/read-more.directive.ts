import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[ycReadMore]'
})
export class ReadMoreDirective implements OnInit {
  @Input()
  maxHeight;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.readMore();

  }


  readMore() {
    let elHeight = this.elRef.nativeElement.offsetHeight ;
    if (elHeight <= this.maxHeight){
      
    }
  }
}
