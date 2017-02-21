angular.module('userProfiles').controller('MainController', function($scope, mainService){

    $scope.thisAppIsBroken = "This angular app is working";
    $scope.users = mainService.getUsers();

    $scope.toggleFavorite = function(idx) {
      mainService.toggleFavorite(idx);
      $scope.users = mainService.getUsers();
    }

})
