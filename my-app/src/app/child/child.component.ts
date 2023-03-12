import { Component ,Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() buttonText : string = 'OutPUT test';
  count : number = 0;
  @Output() changeTextChild : EventEmitter<string> = new EventEmitter<string>

  updateText() {
    this.count += 1;
      this.changeTextChild.emit('This text is updated from child component ' + this.count + ' times')
  }
}
