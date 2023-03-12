import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent implements OnInit{

  lastValue  : string;
  constructor() {
    this.lastValue = '';
  }
 
  ngOnInit(): void {
    
  }
  
  onChangeHandler(data : any) {
     console.log(data);
     this.lastValue = data;
  }

  clickHandler(event : any) {
    console.log(event);
    this.lastValue = event;
  }
}
