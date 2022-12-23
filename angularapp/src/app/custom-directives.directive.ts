import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective {

  constructor(private el:ElementRef, private render: Renderer2) {

    // el.nativeElement.style.backgroundColor = 'yellow';
  //  el.nativeElement.style.display = 'none';
   render.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
   }
}

