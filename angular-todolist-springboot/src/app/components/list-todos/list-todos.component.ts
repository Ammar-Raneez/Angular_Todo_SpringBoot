import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoDataService } from 'src/app/services/data/todoData/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  // todos : Todo[] = [
  //   {
  //     id: 1,
  //     description: "A todo",
  //     done: false,
  //     targetDate: new Date()
  //   },
  //   {
  //     id: 2,
  //     description: "Another todo",
  //     done: false,
  //     targetDate: new Date()
  //   },
  //   {
  //     id: 3,
  //     description: "third todo",
  //     done: false,
  //     targetDate: new Date()
  //   }
  // ]

  constructor(private todoService : TodoDataService) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos("Ammar").subscribe(
      response => {
        this.todos = response;
        console.log(response)
      }
    )
  }

}
