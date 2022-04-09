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
    const now = new Date().getTime();
    const publishedDate = new Date(this.postedDate).getTime();
    const diffInDay = (now - publishedDate) / (1000 * 3600 * 24);
    // const diffInMonth = (now - publishedDate) / (1000 * 3600 * 24 * 30);
    if (diffInDay < 7) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'blue');
    } else if (diffInDay < 30) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'green');
    } else if (diffInDay > 180) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'red');
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'yellow');
    }
  }
}
