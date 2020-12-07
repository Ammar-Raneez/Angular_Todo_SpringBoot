package com.todo.restfulwebservices;

public class HelloWorldBean {
    String message;

    public HelloWorldBean(String message) {
        this.message = message;
    }

    //a getter is needed for the application to run
    //without a getter message, you'd get a white label error
    //for spring boot to convert the object to JSON a getter is needed
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}

