import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[app-highlight]'
})

export class HighlightDirective {
    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('black');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.color = color;
    }
}