import { Component } from '@angular/core';
import {CustomDropDownComponent} from './custom-drop-down/custom-drop-down.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  dropDownData: any;

  constructor() {
    this.dropDownData = [
  	{"key":"baseball","value":"Baseball","img":"../assets/images/baseball.png","checked":false},
  	{"key":"basketball","value":"Basketball","img":"../assets/images/basketball.png","checked":false},
  	{"key":"bowling","value":"Bowling","img":"../assets/images/bowling.png","checked":false},
  	{"key":"football","value":"Football","img":"../assets/images/football.png","checked":false},
  	{"key":"pool","value":"Pool","img":"../assets/images/pool.png","checked":false},
  	{"key":"puck","value":"Puck","img":"../assets/images/puck.png","checked":false},
  	{"key":"rugby","value":"Rugby","img":"../assets/images/rugby.png","checked":false},
  	{"key":"tennis","value":"Tennis","img":"../assets/images/tennis.png","checked":false},
  	{"key":"volleyball","value":"Volleyball","img":"../assets/images/volleyball.png","checked":false},
  	
  ]
  }
  
}
