import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  counter = 0;

  increment() {
    this.counter++;
  }
  reset(){
    this.counter = 0;
  }
  less(){
    if(this.counter > 0){
      this.counter--;
    }  
  }
}
