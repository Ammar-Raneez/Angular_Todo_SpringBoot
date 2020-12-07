package com.todo.restfulwebservices;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TodoHardcodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter;

    static {
        todos.add(new Todo(++idCounter, "Ammar", "Learn Data Science", new Date(), false));
        todos.add(new Todo(++idCounter, "Ammar", "Learn Deep Learning", new Date(), false));
        todos.add(new Todo(++idCounter, "Ammar", "Learn AI", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }
}

