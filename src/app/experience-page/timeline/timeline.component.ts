import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  timelineEvents: any[] = []; // Define your timeline events here

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Detect when the timeline elements come into the viewport
    const windowHeight = window.innerHeight;
    const timelineElements = this.el.nativeElement.querySelectorAll('.timeline');

    timelineElements.forEach((element: any) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < windowHeight && rect.bottom >= 0;

      if (isVisible) {
        // Apply the animation class
        this.renderer.addClass(element, 'animation-triggered');
      }
    });
  }
}
