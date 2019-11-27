import {Component} from '@angular/core';
import {ResultView} from "./model/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  symbols: string[][] = [
    ['CE', 'C', 'DEL', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', ',', '=']
  ];
  resultView: ResultView = new ResultView();

  onBtnClick(symbol: string) {
    switch (symbol) {
      case 'CE':
      case 'C':
        this.resultView.clear();
        break;
      case 'DEL':
        this.resultView.deleteSymbol();
        break;
      case '+/-':
        // this.resultView.changeSymbol();
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        this.resultView.add(symbol, true);
        break;
      case '=':
        this.resultView.viewResult();
        break;
      case ',':
        break;
      default:
        this.resultView.add(symbol, false);
        break;
    }
  }
}
