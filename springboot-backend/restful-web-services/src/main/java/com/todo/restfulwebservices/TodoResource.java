package com.todo.restfulwebservices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    //typically we return Success or no content for delete methods
    //No content can be obtained from ResponseEntity
    //ResponseEntity helps us build requests with specific services
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardcodedService.deleteById(id);
        return todo != null ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
