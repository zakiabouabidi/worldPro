package com.wordpro.business.services;
import org.springframework.stereotype.Component;

import com.wordpro.dao.model.HelloWorld;
@Component
public class BusinessService {

    
    public HelloWorld getHelloWorld(){
        HelloWorld helloworld=new HelloWorld();
       return helloworld;
        
    }
}
