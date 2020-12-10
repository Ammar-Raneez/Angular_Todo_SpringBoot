package com.todo.restfulwebservices;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TodoHardcodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter;

    static {
        todos.add(new Todo(++idCounter, "ammar", "Learn Data Science", new Date(), false));
        todos.add(new Todo(++idCounter, "ammar", "Learn Deep Learning", new Date(), false));
        todos.add(new Todo(++idCounter, "ammar", "Learn AI", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        return todos.remove(todo) ? todo : null;
    }

    public Todo saveTodo(Todo todo) {
        //if the todo cannot be found (a new todo)
        //then we assign it a new id
        if(todo.getId() == -1 || todo.getId() == 0) {
            todo.setId(++idCounter);
        //if it were present we delete the current todo
        } else {
            deleteById(todo.getId());
        }
        //and then add the new todo
        todos.add(todo);
        return todo;
    }

    public Todo findById(long id) {
        for(Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }
}

