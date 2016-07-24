angular.module('starter.CategoryCtrl', [])
.controller('CategoryCtrl', function($scope, $stateParams, $timeout,  Categories) {

    $scope.categories = Categories.all();

})
