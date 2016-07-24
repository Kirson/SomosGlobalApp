angular.module('starter.ShopCtrl', [])
.controller('ShopCtrl', function($scope, $stateParams, $timeout,  Shops, Categories) {

	$scope.allShops = Shops.all();
	//console.log($scope.allShops);
	$scope.shops = [];
	for (var i = 0; i < $scope.allShops.length; i++) {
		if ($scope.allShops[i].catId === $stateParams.catId) {
		  $scope.shops.push( $scope.allShops[i] ) ;
		}
	}
    
	//console.log($scope.shops);
	//console.log($stateParams.shopId);
	if ($stateParams.shopId != undefined){
		$scope.shops = Shops.get($stateParams.shopId);
	}
	
	function chunk(arr, size) {
	  var newArr = [];
	  for (var i=0; i<arr.length; i+=size) {
	    newArr.push(arr.slice(i, i+size));
	  }
	  return newArr;
	}

	$scope.chunkedData = chunk($scope.shops, 2);// to make 2 columns
	// $scope.chunkedData = $scope.shops;

    $scope.category = Categories.get($stateParams.catId);

})
