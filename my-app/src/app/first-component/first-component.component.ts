import {  Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponent implements OnInit, OnChanges, OnDestroy {

  message: string;
  @ViewChild('Input1') input1: ElementRef;
  @ViewChild('Input2') input2: ElementRef;

  constructor() {
    this.input1 = new ElementRef(this);
    this.input2 = new ElementRef(this);
    this.message = "";
  }

  ngOnInit(): void {
    console.log(" First Component - ngOnInit");
  }

  ngOnChanges (): void {
    console.log(" First Component - ngOnChanges");
  }

  ngDoCheck (): void {
    console.log(" First Component - ngDoCheck");
  }

  ngOnDestroy(): void {
    console.log(" First Component - ngOnDestroy");
  }

  clickHandler(event : any) {
    event.preventDefault();
    this.message = (this.input1.nativeElement.value + " AND " + this.input2.nativeElement.value);
  }

}
