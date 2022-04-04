import {
  Directive, OnChanges, Input, ElementRef, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export default class BorderColorDirective implements OnChanges {
  @Input('appBorderColor') postedDate!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    const now = new Date().getFullYear();
    const publishedDate = new Date(this.postedDate).getFullYear();
    const diffMonth = now - publishedDate * 12;
    if (diffMonth < 2) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'green');
    }
    if (diffMonth < 6) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'red');
    }
    if ((now - publishedDate) * 365 < 7) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'blue');
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'yellow');
    }
  }
}
