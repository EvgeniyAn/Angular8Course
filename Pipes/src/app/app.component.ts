import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
  title: string,
  text: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // e: number = Math.E;
  // str = 'hello world';
  // date: Date = new Date();
  // float: number = 0.42;
  // obj = {
  //   a: 1,
  //   b: {
  //     c: 2,
  //     d: {
  //       e: 3,
  //       f: 4
  //     }
  //   }
  // }
  // posts: Post[] = [
  //   {title: 'Beer', text: 'The best beer'},
  //   {title: 'Bread', text: 'The best bread'},
  //   {title: 'JavaScript', text: 'Language'}
  // ];
  // search: string;
  // searchField = 'title';
  //
  // addPost() {
  //   this.posts.unshift({
  //     title:'Angular 8',
  //     text:'Angular 8 course'
  //   })
  // }

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolve')
    }, 4000);
  });

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  date: Date;

  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.date = date;
    })
  }

}
