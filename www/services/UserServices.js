'use strict';

angular.module('starter.UserServices', [])
.factory('User', function($http, $rootScope ) {
  var users = null;
  
  return {

    all: function() {
      return shops;
    },
    remove: function(id) {
      
    },
    newUser: function(usuario){
      console.log("usuario " + usuario);
      // return $http.get("http://localhost:8080/SomosGlobal/webresources/com.somosglobal.rest.categoria", {
        return $http.post($rootScope.restUrl+"com.somosglobal.rest.usuario/",
        usuario
        ).then(function(response){
          console.log(response.data);
          users = response.data;
          return users;
      });
    },

    getUsers: function(){
      // return $http.get("http://localhost:8080/SomosGlobal/webresources/com.somosglobal.rest.categoria", {
        return $http.get($rootScope.restUrl+"com.somosglobal.rest.usuario/"
              ).then(function(response){
                console.log(response.data);
                users = response.data;
                return users;
      });
    },
    getUserById: function(userId){
        return $http.get($rootScope.restUrl+"com.somosglobal.rest.usuario/"+userId
              ).then(function(response){
                console.log(response.data);
                users = response.data;
                return users;
      });
    },
  };
});

