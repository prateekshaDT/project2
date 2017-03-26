
var app = angular.module('myApp', ['ngRoute' , 'ngCookies']);



app.config(function($routeProvider) {
  $routeProvider

  /*.when('/', {
    templateUrl : 'col/home/index.html',
    	controller : 'HomeController'
   
  })*/

  .when('/home', {
    templateUrl : 'col/home/home.html',
    	controller : 'UserHomeController'
   
  })
  
   .when('/Adminhome', {
    templateUrl : 'col/home/Adminhome.html'
    	/*controller : 'UserHomeController'*/
   
  })
  
  .when('/blog', {
    templateUrl : 'col/blog/blog.html',
    	controller : 'BlogController'
   
  })

  .when('/contact', {
    templateUrl : 'col/contact/contact.html'/*,
    controller : 'ContactController'*/
   
  })
  
   .when('/about', {
    templateUrl : 'col/about/about.html'
   
  })
  
  .when('/login', {
    templateUrl : 'col/login/login.html',
    controller : 'LoginController'
   
  })
  
  .when('/logout', {
    templateUrl : 'col/login/logout.html',
    controller : 'LogoutController'
   
  })
  
  .when('/register', {
    templateUrl : 'col/register/register.html',
    controller : 'RegisterController'
   
  })
  
   .when('/adminblog', {
    templateUrl : 'col/blog-admin/adminblog.html',
    controller : 'AdminBlogController' 	
    	   
  })
  
  .when("/allblogs", {
		templateUrl : "col/allblogs/allblogs.html",
		controller : "AllBlogsController"
    	   
  })
  
  .when("/userforum", {
		templateUrl : "col/forum/userforum.html",
		controller : "UserForumController"

	}).when("/adminforum", {
		templateUrl : "col/forum-admin/adminforum.html",
		controller : "AdminForumController"

	})
	
	.when("/userjobs", {
		templateUrl : "col/jobs/userjobs.html",
		controller : "UserJobsController"

	})
	
	.when("/job", {
		templateUrl : "col/job-admin/jobs.html",
		controller : "AdminJobsController"
	})
	
	.when("/friendslist", {
		templateUrl : "col/friend/friendslist.html",
		controller : 'FriendsListController'

	})
	
   .when('/chat', {
      templateUrl : 'col/chat/chat.html',
      controller : 'chatController' 	
    	   
  })


  .otherwise({redirectTo: '/'});
});

