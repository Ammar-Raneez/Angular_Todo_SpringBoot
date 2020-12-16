package com.todo.restfulwebservices.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//can handle rest requests
@CrossOrigin()
@RestController
public class BasicAuthenticationController {
    //authentication path
    @GetMapping(path="/basicauth")
    public AuthenticationBean helloWorldPath() {
        return new AuthenticationBean("You are authenticated");
    }
}
