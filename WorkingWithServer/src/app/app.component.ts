import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";

export interface Todo {
  completed: boolean,
  title: string,
  id?: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts?_limit=2')
      .subscribe(todos => {
        console.log(todos);
        this.todos = todos
      });
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo: Todo = {
      completed: false,
      title: this.todoTitle
    };

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/posts', newTodo)
      .subscribe(todo => {
        console.log('Todo; ', todo);
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }
}

