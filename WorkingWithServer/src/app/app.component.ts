import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "./TodosService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    this.todosService.addTodo({
      completed: false,
      title: this.todoTitle
    }).subscribe(todo => {
      console.log('Todo; ', todo);
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      });
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
        this.todos.find(t => t.id === todo.id).completed = todo.completed;
      });
  }
}

