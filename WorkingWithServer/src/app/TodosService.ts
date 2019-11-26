import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, delay, map, tap} from "rxjs/operators";
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
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    });
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/posts', newTodo, {
      headers: headers
    });
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'any');
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts', {
      // params: new HttpParams().set('_limit', '3')
      params,
      observe: "response"
    })
      .pipe(
        map(response => {
          // console.log(response);
          return response.body;
        }),
        delay(1500),
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  removeTodo(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      observe: 'events'
    }).pipe(
      tap(event => {
        // console.log(event);
        if (event.type === HttpEventType.Sent) {
          console.log('Sent ', event);
        }
        if (event.type === HttpEventType.Response) {
          console.log('Response ', event);
        }
      })
    );
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      completed: true
    }, {
      // responseType: "text"
    });
  }
}
