import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO_JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor(private httpClient : HttpClient) { }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
  }
  retrieveTodo(username, id) {
    return this.httpClient.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo)
  }

  addTodo(username, todo) {
    return this.httpClient.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo)
  }
}
