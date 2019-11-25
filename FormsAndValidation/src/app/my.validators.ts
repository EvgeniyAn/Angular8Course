import {FormControl} from "@angular/forms";

export class MyValidators {
  static emails = ['1@mail.ru', 'test@mail.ru'];

  static restrictedEmails(control: FormControl): { [key: string]: boolean } {
    if (MyValidators.emails.includes(control.value)) {
      return {restrictedEmail: true}
    }
    return null;
  }
}
