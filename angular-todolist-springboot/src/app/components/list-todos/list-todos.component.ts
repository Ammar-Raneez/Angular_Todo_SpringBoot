import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/Todo';
import { TodoDataService } from 'src/app/services/todo-data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  deleteMsg: string;

  constructor(private todoService : TodoDataService, private router : Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos("ammar").subscribe(
      response => {
        this.todos = response;
        console.log(response)
      }
    )
  }

  deleteTodo(id) {
    console.log(`Delete Todo ${id}`);
    this.todoService.deleteTodo("ammar", id).subscribe(
      response => {
        this.deleteMsg = `Delete of Todo ${id} Successful`
        console.log(response); 
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`Update Todo ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
