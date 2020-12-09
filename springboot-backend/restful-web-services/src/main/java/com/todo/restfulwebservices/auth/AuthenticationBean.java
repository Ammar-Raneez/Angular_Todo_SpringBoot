package com.todo.restfulwebservices.auth;

public class AuthenticationBean {
    private String auth;

    public AuthenticationBean() { }

    public AuthenticationBean(String auth) {
        this.auth = auth;
    }

    public String getAuth() { return this.auth; }
}
