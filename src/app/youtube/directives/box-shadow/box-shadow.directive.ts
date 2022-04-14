import {
  Directive, OnChanges, Input, ElementRef, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBoxShadow]',
})
export class BoxShadowDirective implements OnChanges {
  @Input('appBoxShadow') postedDate!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    const now = new Date().getTime();
    const publishedDate = new Date(this.postedDate).getTime();
    const diffInDay = (now - publishedDate) / (1000 * 3600 * 24);
    // const diffInMonth = (now - publishedDate) / (1000 * 3600 * 24 * 30);
    if (diffInDay < 7) {
      this.renderer.setStyle(this.elRef.nativeElement, 'box-shadow', '7px 7px 7px #479dff83');
    } else if (diffInDay < 30) {
      this.renderer.setStyle(this.elRef.nativeElement, 'box-shadow', '7px 7px 7px rgba(0, 128, 0, 0.5)');
    } else if (diffInDay > 180) {
      this.renderer.setStyle(this.elRef.nativeElement, 'box-shadow', '7px 7px 7px rgba(255, 0, 0, 0.5)');
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'box-shadow', '7px 7px 7px rgba(255, 255, 0, 0.5)');
    }
  }
}
