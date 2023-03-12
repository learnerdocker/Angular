import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '.falsyColor'
})
export class FalsyColor {
    constructor(el : ElementRef) {
        el.nativeElement.style.color = 'red';
    }
}