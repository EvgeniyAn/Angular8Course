import {Component} from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {id: 1, title: 'Post 1', text: 'Some text 1'},
    {id: 2, title: 'Post 2', text: 'Some text 2'},
    {id: 3, title: 'Post 3', text: 'Some text 3'}
  ]
}
