import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root' //автоматическая регистрация в app.module
})
export class AppCounterService {
  counter = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
