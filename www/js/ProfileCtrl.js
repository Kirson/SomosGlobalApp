angular.module('starter.ProfileCtrl',[])
.controller('ProfileCtrl', function($scope, $stateParams, $timeout,  $rootScope,$cordovaGeolocation,$ionicLoading) {

   $scope.profileData = $rootScope.profileData;
   var lat;
   var long;

   var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
          lat  = position.coords.latitude;
          long = position.coords.longitude;
          $scope.lat = lat;
          $scope.long = long;
          //alert(lat + " --- " + long);
          
          var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    	var mapOptions = {
      		center: latLng,
      		zoom: 15,
      		mapTypeId: google.maps.MapTypeId.ROADMAP
    		};
 
    		var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "Su posicion"
            });
        });
 
        $scope.map = map;
    		
      }, function(err) {
        // error
        console.log("Could not get location");
    });

      /*
      google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(lat, long);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "Su posicion"
            });
        });
 
        $scope.map = map;
    });
	*/
})
