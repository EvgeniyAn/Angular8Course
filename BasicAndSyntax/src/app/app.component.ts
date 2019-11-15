import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Basic1';
  number = 41;
  arr = [1, 2, 3];
  obj = {a1: 1, b1: 2, c1: {a2: 2}};

  constructor() {

  }
}
