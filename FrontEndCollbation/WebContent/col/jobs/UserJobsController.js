app.controller("UserJobsController",function($scope,$http,$rootScope)	
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
					
					console.log(" in userjobs controller");
					
							 $http.get("http://localhost:8080/BackEndAjs/viewJobs")
							    .then(function (response) {
							    	
							    	$scope.jobs = response.data;
							    	
							    	console.log("data:"+response.data);
							    	$rootScope.uname;
							    	
							    });
							 $scope.applyJob=function(job)
							 {
								 $scope.message="you have successfully applied for the job";
							 };
						});	