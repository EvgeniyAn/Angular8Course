import {Component} from '@angular/core';
import {interval} from 'rxjs'; // позволяет создавать новые стримы
import {} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const intervalStream$ = interval(1000);
    intervalStream$.subscribe((value) => {
      console.log(value);
    });
  }
}
