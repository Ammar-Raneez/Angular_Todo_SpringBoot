import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor(private httpClient : HttpClient) { }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`http://localhost:8081/users/${username}/todos`)
  }
  retrieveTodo(username, id) {
    return this.httpClient.get<Todo>(`http://localhost:8081/users/${username}/todos/${id}`)
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`http://localhost:8081/users/${username}/todos/${id}`)
  }
}
