import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer2, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'yc-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardsComponent implements OnInit {
  div: any;
  @ViewChild('crd') crd: ElementRef
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }
  
  @HostListener('mouseenter') onMouseEnter(){
    this.div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');

    this.renderer.appendChild(this.div, text);
    this.renderer.appendChild(this.crd.nativeElement, this.div);
    this.renderer.addClass(this.crd.nativeElement, 'bg-primary');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeChild(this.crd.nativeElement, this.div);
    this.renderer.removeClass(this.crd.nativeElement, 'bg-primary');
  }

}
