import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color: string = 'blue';
  @Input() dStyles: { border?: string, fontWeight?: string, borderRadius?: string };

  constructor(private elRef: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter', ['$event.target']) onEnter() {
    this.r.setStyle(this.elRef.nativeElement, 'color', this.color);
    this.r.setStyle(this.elRef.nativeElement, 'font-weight', this.dStyles.fontWeight);
    this.r.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
    this.r.setStyle(this.elRef.nativeElement, 'border-radius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave', ['$event.target']) onLeave() {
    this.r.setStyle(this.elRef.nativeElement, 'color', null);
    this.r.setStyle(this.elRef.nativeElement, 'font-weight', null);
    this.r.setStyle(this.elRef.nativeElement, 'border', null);
    this.r.setStyle(this.elRef.nativeElement, 'border-radius', null);
  }
}
