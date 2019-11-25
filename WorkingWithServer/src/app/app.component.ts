import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

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
  loading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchTodos();
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

  fetchTodos() {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts?_limit=2')
      .pipe(delay(1500))
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      });
  }
}

