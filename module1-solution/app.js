(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message="";
  $scope.foodList="";

  $scope.checkLunch = function () {
    if($scope.foodList==""){
      $scope.message='Please enter data first!';
    }else if($scope.foodList.split(',').length<=3){
      $scope.message='Enjoy!';
    }else{
      $scope.message='Too much!';
    };
  }
};

})();
