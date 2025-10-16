import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appUppercase]',
    standalone: true,
})

export class UppercaseDirective implements OnInit {
    
    constructor(private el: ElementRef<HTMLElement>) {}
    
    ngOnInit(): void {
    const texto = this.el.nativeElement.textContent || ''; //Conversión  del texto a minúsculas 
    this.el.nativeElement.textContent = texto.toLowerCase();
    }
}
