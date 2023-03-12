import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector : '.truthy'
})
export class Truthy {
    constructor(element : ElementRef) {
        element.nativeElement.style.color = 'blue';
    }
}