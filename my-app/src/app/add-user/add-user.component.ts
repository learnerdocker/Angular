import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

   user : {
    name: string,
    checked: boolean
  };

  @Output() AddedUser : EventEmitter<object> = new EventEmitter<object>;

  constructor () {
    this.user = {name: '', checked: false}
  }

  // onUserChange(event: any){
  //   this.AddedUser.emit();
  // }

  onClickHandler(data : any) : void {
    console.log(data);
    this.user.name = data[0];
    this.user.checked = data[1] == "True" ? true : false;
    this.AddedUser.emit(this.user);
  }

}
