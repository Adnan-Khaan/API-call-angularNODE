

var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  

	var refresh = function() {
  		$http.get('/contactlist').success(function(response) {
   	  $scope.carlist='';
      $scope.carlist = response;

	  });
  
      $scope.totalDisplayed = 50;
    //To loadMore will show you 50 records and load more on request. 
    $scope.loadMore = function () {
      $scope.totalDisplayed += 50;  
      if($scope.totalDisplayed==500) // The app wil load 500 records from APi at one time and load more as needed.  . 
      {
        refresh();
      }
    };
  
  };

refresh();


}]);




