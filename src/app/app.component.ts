import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name!:string;
  cities = ['Barcelona','Madrid','Lima']
  title = 'projectCities';
  url = 'https://www.enter.co/wp-content/uploads/2020/03/21770-1024x768.jpg'
}
