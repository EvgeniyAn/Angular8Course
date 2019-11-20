export interface IResultView {
  digits: string[],
  resultValue: string
}

export class ResultView implements IResultView {
  digits: string[] = [];
  resultValue: string = '';
  functions: {} = {
    '+': ResultView.plus,
    '-': ResultView.minus,
    '*': ResultView.increase,
    '/': ResultView.divide,

  };
  operationWasAlready: boolean = false;
  result: number = 0;

  private static plus(num1: number, num2: number): number {
    return num1 + num2;
  }

  private static minus(num1: number, num2: number): number {
    return num1 - num2;
  }

  private static increase(num1: number, num2: number): number {
    return num1 * num2;
  }

  private static divide(num1: number, num2: number): number {
    return num1 / num2;
  }

  private static isNumeric(str: string): boolean {
    return /^\d*(?:\.)*(?:\d+)$/.test(str);
  }

  private refreshResultView(): void {
    this.resultValue = '';
    for (let d of this.digits) {
      this.resultValue += d + ' '
    }
    this.resultValue = this.resultValue.trim();
  }

  private calc(): void {
    if (this.digits.length !== 3) {
      return;
    }
    let num1 = parseFloat(this.digits[0]);
    let num2 = parseFloat(this.digits[2]);
    this.result = this.functions[this.digits[1]](num1, num2);
    this.digits = [];
    this.digits.push(this.result.toString());
  }

  private addOperation(symbol: string): void {
    if (this.digits.length === 3) {
      this.calc();
      this.add(symbol, true);
    } else {
      if (ResultView.isNumeric(this.digits[this.digits.length - 1])) {
        this.digits.push(symbol);
      }else{
        this.digits.pop();
        this.digits.push(symbol);
      }
    }
    this.refreshResultView();
  }

  private addNumber(symbol: string): void {
    if (this.digits.length === 0) {
      this.digits.push(symbol);
    } else {
      let str = this.digits.pop();
      if (ResultView.isNumeric(str)) {
        this.digits.push(str + symbol);
      } else {
        this.digits.push(str);
        this.digits.push(symbol);
      }
    }
  }

  public add(symbol: string, _isOperation: boolean): void {
    if (_isOperation) {
      this.addOperation(symbol);
    } else {
      this.addNumber(symbol);
    }
    this.refreshResultView();
  }

  public clear(): void {
    this.digits = [];
    this.resultValue = '';
  }

  public deleteSymbol(): void {
    if (this.digits.length > 0) {
      let digit = this.digits.pop();
      if (digit.length > 1) {
        this.digits.push(digit.substr(0, digit.length - 1));
      }
    }
    this.refreshResultView();
  }

  public viewResult(): void {
    this.calc();
    this.refreshResultView();
  }


}
