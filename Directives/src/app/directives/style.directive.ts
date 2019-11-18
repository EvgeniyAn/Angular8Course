import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private elRef: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event){
    console.log(event);
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(){
    this.r.setStyle(this.elRef.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(){
    this.r.setStyle(this.elRef.nativeElement, 'color', null);
  }
}
