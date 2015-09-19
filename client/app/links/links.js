angular.module('shortly.links', [])


.controller('LinksController', function ($scope, $http, Links, Auth) {
  $scope.data = {}; 
  $scope.getLinks = function() {
      $http.get('/api/links').success(function(data) {
      $scope.data.links = data;
    });
  };
  $scope.getWithCode = function() {
    //$http.get('/api/links')
  };
  $scope.signout = function() {
     Auth.signout();
  }; 
  $scope.getLinks();
});

