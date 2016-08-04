angular.module('starter.LoginCtrl', [])
.controller('LoginCtrl', function($scope,$rootScope,$stateParams, $location,$cordovaFacebook, $cordovaGooglePlus, $ionicLoading,$cordovaGeolocation, User) {
 console.log("login ctrl ");
 	$scope.login = function () {
      $location.path('/app/profile');
 }


  $scope.visitanteLogin = function () {
      $location.path('/app/category');
 }

  // console.log( "user " + $scope.user);
  // console.log( "user nombre " + $scope.nombre);
  // console.log( "user text " + $scope.text);

if ($rootScope.user === undefined){
  $rootScope.user = {
              nombre : '',
              apellido: '',
              userName : '',
              password: '',
              password2 :'',
              correo:''
          };
}
/*
$scope.register = function () {
  
  // console.log( "user " + $scope.user.nombre);
  $location.path('/app/registerConfirm');
}
*/
  $scope.newUser = function () {

      console.log("nombre " + $rootScope.user.nombre);
      var usuario = {"usrNombre" :$scope.user.userName, "usrPassword" : $scope.user.password , "usrCreadoPor": "app", "usrNombre2": $scope.user.nombre +" "+$scope.user.apellido};
      $scope.allCategories = User.newUser(usuario).then(function(response){
        $scope.response =  response;
          console.log( "result " + $scope.response);
          // console.log(  $scope.categories );
          $rootScope.user = {
              nombre : '',
              apellido: '',
              userName : '',
              password: '',
              password2 :'',
              correo:''
          };
        
      });
      
      $location.path('login');
   }



    $scope.registerUser = function () {

            if ($scope.user.email && $scope.user.password){

                $scope.show();

            ref.createUser({
                email: $scope.user.email,
                password: $scope.user.password
            }, function (error) {
                if (error === null) {
                    console.log("User created successfully");

                    ref.authWithPassword({
                        email: $scope.user.email,
                        password: $scope.user.password
                    }, function (error, authData) {
                        if (error) {
                            console.log("Login Failed!", error);
                            $scope.hide()
                        } else {
                            console.log("Authenticated successfully with payload:", authData);
                            $scope.hide()


                            function authDataCallback(authData) {
                                if (authData) {
                                    console.log("User " + authData.uid + " is logged in with " + authData.provider);
                                    $scope.myUser = authData;
                                    $scope.hide()
                                    $ionicPopup.alert({
                                        title: 'Register Success!',
                                        template: 'logged in as ' + $scope.myUser.password.email
                                    })
                                } else {
                                    console.log("User is logged out");
                                    $scope.hide()
                                }
                            }

                            // Register the callback to be fired every time auth state changes
                            ref.onAuth(authDataCallback);
                        }
                    });

                } else {
                    $scope.hide();
                    console.log("Error creating user:", error);
                    $ionicPopup.alert({
                        title: 'Error creating user!',
                        template: error
                    })
                }
            })
        }
            else{
                $ionicPopup.alert({
                    title: 'Invalid Parameters',
                    template: 'Please fill both Fields above.'
                })
            }

        };


 /*
   * Learn how facebooks graph api works: https://developers.facebook.com/docs/graph-api/quickstart/v2.2
   * The array params "public_profile", "email", "user_friends" are the permissions / data that the app is trying to access.
  */
  $scope.fbLogin = function(){

    $cordovaFacebook.login(["public_profile", "email", "user_friends"])
    .then(function(success) {
      /*
       * Get user data here. 
       * For more, explore the graph api explorer here: https://developers.facebook.com/tools/explorer/
       * "me" refers to the user who logged in. Dont confuse it as some hardcoded string variable. 
       * 
      */
      //To know more available fields go to https://developers.facebook.com/tools/explorer/
      $cordovaFacebook.api("me?fields=id,name,picture", [])
      .then(function(result){
        /*
         * As an example, we are fetching the user id, user name, and the users profile picture
         * and assiging it to an object and then we are logging the response.
        */
        var userData = {
          id: result.id,
          name: result.name,
          pic: result.picture.data.url
        }
        //console.log("0=>");
        //console.log(result);
        //Do what you wish to do with user data. Here we are just displaying it in the view
        $scope.fbData = JSON.stringify(userData, null, 4);
        //console.log("1=>");
        //console.log(userData);
        //console.log("2=>");
        //console.log($scope.fbData);
        $rootScope.profileData = userData;
        //console.log("2a=>");
        //console.log($rootScope.profileData);
        //$stateParams.profileData = userData;
        //console.log("2b=>");
        //console.log($stateParams.profileData);
         $location.path('/app/profile');

      }, function(error){
        // Error message
      })
      
    }, function (error) {
      // Facebook returns error message due to which login was cancelled.
      // Depending on your platform show the message inside the appropriate UI widget
      // For example, show the error message inside a toast notification on Android
    });

  }

  /*
   * Google login
  */

  $scope.googleLogin = function(){

    $ionicLoading.show({template: 'Loading...'}); 
    /*
     * Google login. This requires an API key if the platform is "IOS".
     * Example: $cordovaGooglePlus.login('yourApiKey')
    */
    $cordovaGooglePlus.login()
    .then(function(data){
      
      $scope.googleData = JSON.stringify(data, null, 4);
      $ionicLoading.hide();

    }, function(error){
      
      // Google returns error message due to which login was cancelled.
      // Depending on your platform show the message inside the appropriate UI widget
      // For example, show the error message inside a toast notification on Android
      $ionicLoading.hide();

    });
  }

/*
ionic.Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
    StatusBar.hide();
  });
*/
})