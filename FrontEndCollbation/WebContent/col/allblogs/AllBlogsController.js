app.controller("AllBlogsController",function($scope,$http,$rootScope,$route)	
						{	
					$rootScope.userhome=true;
					$rootScope.userforum=true;
					$rootScope.userjobs=true;
					$rootScope.adminblog=false;
					$rootScope.adminforum=false;
					$rootScope.register=false;
					$rootScope.home=true;
					$rootScope.addjobs=false;
					$rootScope.login=false;
					$rootScope.jobs=false;
					$rootScope.blogs=true;
					$rootScope.allblogs=true;
					$rootScope.chat=true;
					$rootScope.friendslist=true;
					$rootScope.logout=true;
					
					
					console.log("username in allblog controller:"+$rootScope.uname);
							 $http.get("http://localhost:8080/BackEndAjs/viewAllBlogs")
							    .then(function (response) {
							    	
							    	$scope.blogs = response.data;
					
							    	console.log("data:"+response.data);
							    });
							 $scope.likeBlog=function(allblogs)
							 { 
								 $scope.allblogslike=allblogs;
								 console.log("category:"+$scope.allblogslike.likes);
								like= $scope.allblogslike.likes;
						       likes=like+1
						       console.log("likes:",likes);
						       $scope.likes=likes;
						       console.log("scope likes:"+$scope.likes);   	
						       var like=
									{
								blog_id:$scope.allblogslike.blog_id,
								category:$scope.allblogslike.category,
								title:$scope.allblogslike.title,
								description:$scope.allblogslike.description,
								postedby:$scope.allblogslike.postedby,
								status:$scope.allblogslike.status,
								likes:$scope.likes
									}
								console.log("data in like:"+like);
								console.log("postedby:"+$rootScope.uname);
								 $http.put('http://localhost:8080/BackEndAjs/updateBlog',like);
								 $http.get("http://localhost:8080/BackEndAjs/viewBlogs")
								    .then(function (response) {
								    	
								    	$scope.blogs = response.data;
								    	console.log(blogs);
								    	console.log("data:"+response.data);
								    });
								 
							 }
							 $scope.viewcomments=function(allblogs)
							 {
								 
								 console.log("in viewcomments fn");
								 $scope.viewcomments=allblogs;
								 console.log("blogid:"+$scope.viewcomments.blog_id);
					 $http.get("http://localhost:8080/BackEndAjs/viewComments/"+$scope.viewcomments.blog_id)
								    .then(function (response) {
								    	
								    	$scope.comments = response.data;
								    	
								    	console.log("data:"+response.data);
								    	
								    });
					
							 }
							
						$scope.comment=function(allblogs)
						{
							console.log("in comment function");
							
							$scope.commentblog=allblogs;
							console.log("comment is"+$scope.commentblog.Comment);
							var comment=
								{
									blogid:$scope.commentblog.blog_id,
									name:$rootScope.uname,
									comment:$scope.commentblog.Comment
								};
							$http.post('http://localhost:8080/BackEndAjs/addComment',comment);
						 $http.get("http://localhost:8080/BackEndAjs/viewAllBlogs")
							    .then(function (response) {
							    
							    	$scope.blogs = response.data;
							    	$scope.message="commemts done succesfully";
							    	
							    	console.log("data:"+response.data);
							    });
							 console.log("out of addcomment");
							 $rootScope.uname;
						}
						
						});