// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova','ionic-material', 'ionMdInput',
                                    'starter.MenuCtrl', 'starter.LoginCtrl', 'starter.CategoryCtrl', 'starter.MapCtrl',
                                    'starter.ShopCtrl', 'starter.ProductCtrl','starter.CategoryServices', 'starter.UserServices', 
                                    'starter.ShopServices' , 'starter.ProductServices', 'starter.ProfileCtrl' ])

.run(function($ionicPlatform , $rootScope) {
    $rootScope.restUrl = "http://186.5.121.17:9090//SomosGlobal/webresources/";
    // $rootScope.restUrl = "http://192.168.0.103:8080/SomosGlobal/webresources/";

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    
    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
    })
 
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

    .state('app.register', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller: 'LoginCtrl'
            }
            

        }
    })

    .state('app.registerConfirm', {
        url: '/registerConfirm',
        views: {
            'menuContent': {
                templateUrl: 'templates/register-confirm.html',
                controller: 'LoginCtrl'
            }
        }
    })

    .state('app.registerTerms', {
        url: '/registerTerms',
        views: {
            'menuContent': {
                templateUrl: 'templates/register-terms.html',
                controller: 'LoginCtrl'
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            }

        }
    })

    .state('app.category', {
        url: '/category',
        views: {
            'menuContent': {
                templateUrl: 'templates/category.html',
                controller: 'CategoryCtrl'
            }

        }
    })

    .state('app.subcategory', {
        url: '/subcategory/:catId',
        views: {
            'menuContent': {
                templateUrl: 'templates/category.html',
                controller: 'CategoryCtrl'
            }

        }
    })

    .state('app.categoryDetail', {
        url: '/sucategoryDetail/:catId',
        views: {
            'menuContent': {
                templateUrl: 'templates/categoryDetail.html',
                controller: 'ShopCtrl'
            }
        }
    })

    .state('app.shop', {
        url: '/shop/:shopId',
        views: {
            'menuContent': {
                templateUrl: 'templates/shop.html',
                controller: 'ProductCtrl'
            }
        }
    })

    .state('app.products', {
        url: '/products',
        views: {
            'menuContent': {
                templateUrl: 'templates/shop.html',
                controller: 'ProductCtrl'
            }
        }
    })

    .state('app.map', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/android-map-connect.html',
                controller: 'MapCtrl'
            }
        }
    })

    
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});