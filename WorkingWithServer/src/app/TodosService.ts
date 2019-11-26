import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, delay} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

export interface Todo {
  completed: boolean,
  title: string,
  id?: number
}

@Injectable({providedIn: 'root'})
export class TodosService {
  constructor(private http: HttpClient) {
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/posts', newTodo);
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts9?_limit=2')
      .pipe(
        delay(1500),
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      completed: true
    });
  }
}
