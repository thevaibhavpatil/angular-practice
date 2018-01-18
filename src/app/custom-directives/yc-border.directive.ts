import { Directive,ElementRef,Renderer2,Input, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[ycBorder]'
})
export class YcBorderDirective implements OnInit  {

  @Input() brcolor:string;
  @Input() brStyle:string;
  @Input() brRadius:string;
  div:any;
  constructor(private elRef?:ElementRef,private renderer?: Renderer2) { 
   }
   ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement,'border','1px');
    this.renderer.setStyle(this.elRef.nativeElement,'border-color',this.brcolor);
    this.renderer.setStyle(this.elRef.nativeElement,'border-style',this.brStyle);
    this.renderer.setStyle(this.elRef.nativeElement,'border-radius',this.brRadius);
    this.renderer.setProperty(this.elRef,'title','new value');
    console.log(this.elRef);    
   }
  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.elRef.nativeElement,'height','500px');

    /* Create dynamic Element */
    this.div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');

    /* Append child to parent element */
    this.renderer.appendChild(this.div, text);
    this.renderer.setProperty(this.elRef,'title','new value');
    this.renderer.setAttribute(this.div,'id','abc');    
    this.renderer.appendChild(this.elRef.nativeElement, this.div);

    
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elRef.nativeElement,'height','unset');

    /* Remove child From parent Element */
    // this.renderer.removeChild(this.elRef,this.div);
  }

}
