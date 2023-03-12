import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector : 'test-component',
    // templateUrl : './test.component.html',
    template: `<h2 class="card"> 
                {{message}} <br/>
                {{newMsg}}
                 </h2>`,
    // styleUrls : ['./test.component.css']
    styles: ['h2{padding: 10px 15px}']
})
export class TestComponent implements OnInit{
    @Input() message: string = ''; //= 'This is used to demonstrate a attribute directive'

   

    newMsg : string = '';
    constructor() {
        this.newMsg = "NEW MESSAGE"
        this.message = "MESSAGE"
    }

    ngOnInit() {

    }
    
}