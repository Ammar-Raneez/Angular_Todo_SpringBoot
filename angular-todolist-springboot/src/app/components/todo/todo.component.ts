import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/Todo';
import { TodoDataService } from 'src/app/services/data/todoData/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number;
  todo: Todo;

  constructor(private todoService : TodoDataService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo();

    this.todoService.retrieveTodo("ammar", this.id).subscribe(
      response => {
        this.todo = response;
      }
    )
  }

}
