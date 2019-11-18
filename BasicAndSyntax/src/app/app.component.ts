import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any = 'Initial';

  constructor() {
  }

  onInput(event: any) {
    this.title = event.target.value;
  }
}
