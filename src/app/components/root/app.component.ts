import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  data = {
    name:"Peter",
    age:50
  }
  
  opened = false;
  title = 'Material';
  
}
