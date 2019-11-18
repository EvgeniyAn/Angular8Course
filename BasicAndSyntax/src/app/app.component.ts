import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [3, 5, 8, 15];
  objs = [
    {
      title: 'Post 1',
      author: 'Evgen',
      comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'}
      ]
    },
    {
      title: 'Post 2',
      author: 'Evgen 2',
      comments: [
        {name: 'Max 2', text: 'lorem 1'},
        {name: 'Max 2', text: 'lorem 2'},
        {name: 'Max 2', text: 'lorem 3'}
      ]
    },
    {
      title: 'Post 3',
      author: 'Evgen 3',
      comments: [
        {name: 'Max 3', text: 'lorem 1'},
        {name: 'Max 3', text: 'lorem 2'},
        {name: 'Max 3', text: 'lorem 3'}
      ]
    },
  ];
}
