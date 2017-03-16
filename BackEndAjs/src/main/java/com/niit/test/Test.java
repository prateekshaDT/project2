/*package com.niit.test;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.DAO.UsersDao;
import com.niit.model.Users;

public class Test {

	public static void main(String[] args)
	{
		AnnotationConfigApplicationContext con = new AnnotationConfigApplicationContext();
		con.scan("com.niit.*");
		con.refresh();
		Users user=(Users)con.getBean("users");
		UsersDao usersdao=(UsersDao)con.getBean("usersDao");
	
	    	    user.setName("prathii");
		user.setMobile("9497973956");
		user.setPassword("123");
		//user.setRole("USER_ADMIN");
		
		//user.setFile("file");
		
		usersdao.registerUser(user);	
		
	}
}

*/