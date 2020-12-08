package com.todo.restfulwebservices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.*;

@CrossOrigin()
@RestController
public class TodoResource {
    @Autowired
    private TodoHardcodedService todoHardcodedService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoHardcodedService.findAll();
    }

    @GetMapping("users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoHardcodedService.findById(id);
    }

    @PutMapping("users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
       @RequestBody Todo updatedTodoBody) {
        Todo updatedTodo = todoHardcodedService.saveTodo(updatedTodoBody);

        return new ResponseEntity<Todo>(updatedTodoBody, HttpStatus.OK);
    }

    @PostMapping("users/{username}/todos")
    public ResponseEntity<Void> addTodo(@PathVariable String username, @PathVariable long id,
                                           @RequestBody Todo updatedTodoBody) {

        //the logic here is to use the saveTodo method to add the new todo
        //since this todo will be caught in the first if condition where the id is -1
        //it will be assigned a new Id and added into the list of todos
        Todo createdTodo = todoHardcodedService.saveTodo(updatedTodoBody);

        //we append the id of the todo into the uri in order to generate a uri for the newly created todo
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").
                buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    //typically we return Success or no content for delete methods
    //No content can be obtained from ResponseEntity
    //ResponseEntity helps us build requests with specific services
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardcodedService.deleteById(id);
        return todo != null ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
