import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {

  opened = false; //used with main menu 
  title = 'Material'; // used with title 

  //Used with Select Control 
  items = [
  {
    value:0, 
   viewValue:"Italy"
  },
  {
    value:1, 
   viewValue:"Hungary"
  },
  {
    value:2, 
    viewValue:"Norway"
  }];

  selectedValue = {};

  //Used with Menu and submenus (lazy loading)
  data = {
    name:"Peter",
    age:50
  }
  
  options:string[] = ['Angular', 'React', 'Vue'];
}

