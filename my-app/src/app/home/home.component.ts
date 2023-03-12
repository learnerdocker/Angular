import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  title = 'my-app';
  currentTime : string;
  date: Date;
  users : {name: string, checked:boolean}[] = [];
    // [{name:'Narender', checked: true},
    // {name:'Susmitha', checked: false}, 
    // {name:'Krithika', checked: true},
    // {name:'Thanvika', checked: true}];

  isTime : boolean = false;
  checked: boolean;
  appMessage : any = 'This one to demonstrate a components';
  data : string;
  parentMessage : string = ' this is parent msg';

  constructor() {
    this.checked = true;
    this.data = '';
    this.currentTime = '';
    this.date = new Date();
    this.updateTime();
  }

  ngOnChanges() : void{
    // this.updateTime();
   }
 
   ngOnInit(): void {
     //fill weather data into data prop
     this.data = 'weather data is being loading...'
    // this.updateTime();
    
   }

   ngOnDestroy(): void {
     console.log("Home component - ngOnDestroy");
   }
 
   updateTime () {
     setInterval(()=> {
       this.date = new Date();
      this.currentTime = this.date.getHours().toString() + ':'+ this.date.getMinutes().toString() + ':' +this.date.getSeconds();
    }, 1000)
    this.isTime = true;
   }
 
   toggleHandler (event : Event) {
     this.checked = !this.checked;
     
     this.users.forEach(element => {
       element.checked = !element.checked;
     });
   }
 
   changeText (changeMsg : string) {
     this.parentMessage = changeMsg;
     this.appMessage = changeMsg;
   }
 
   addUser(data: any) {
     this.users.push({name: data.name, checked:data.checked});
   }
}
