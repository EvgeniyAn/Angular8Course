import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppComponent title';
  number = 41;
  arr = [1, 2, 3];
  obj = {a1: 1, b1: 2, c1: {a2: 2}};
  inputValue: any = '';

  constructor() {
  }

  onInputChange(event: KeyboardEvent) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onBlur(value: string) {
    this.inputValue = value;
  }
}
