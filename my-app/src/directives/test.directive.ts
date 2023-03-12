import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector : '[test-directive]'
})
export class TestDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'blue';
        el.nativeElement.style.color = 'white';
    }
}