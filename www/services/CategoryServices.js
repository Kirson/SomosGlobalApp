'use strict';

angular.module('starter.CategoryServices', [])
.factory('Categories', function($http) {
var categories;
/*
  var categories = [{
    id: 0,
    name: 'Comidas y Bebidas',
    deseg: 'Comidas y Bebidas',
    face: 'img/category/cam.png',
    ico: 'icon ion ion-coffee'
  }
  , {
    id: 1,
    name: 'Salud',
    deseg: 'Salud',
    face: 'img/category/sal.png',
    ico:'icon ion ion-medkit'
  },
  {
    id: 2,
    name: 'Belleza y Fitness',
    deseg: 'Belleza y Fitness',
    face: 'img/category/bel.png',
    ico: 'icon ion ion-android-walk'
  },
  {
    id: 3,
    name: 'Compras',
    deseg: 'Compras',
    face: 'img/category/com.png',
    ico: 'icon ion ion-pricetags'
  },
  {
    id: 4,
    name: 'Asistencia y Servicios',
    deseg: 'Asistencia y Servicios',
    face: 'img/category/asi.png',
    ico: 'icon ion ion-hammer'
  },
  {
    id: 5,
    name: 'Diversion y Actividades',
    deseg: 'Diversion y Actividades',
    face: 'img/category/div.png',
    ico: 'icon ion ion-happy'
  },
  {
    id: 6,
    name: 'Vacaciones y Turismo',
    deseg: 'Vacaciones y Turismo',
    face: 'img/category/vac.png',
    ico: 'icon ion ion-android-train'
  }];
*/
  return {
    all: function() {
      return categories;
    },

    getCategories: function(){
      // return $http.get("http://localhost:8080/SomosGlobal/webresources/com.somosglobal.rest.categoria", {
        return $http.get("http://192.168.0.103:8080/SomosGlobal/webresources/com.somosglobal.rest.categoria"
          // , {
          //       headers: {
          //           'Content-Type': 'application/json' , 
          //           'Access-Control-Allow-Origin': '*',
          //           'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          //           'Access-Control-Allow-Headers':'X-Requested-With' 
          //       }
          //     }
              ).then(function(response){
                console.log(response.data);
        categories = response.data;
        return categories;
      });
    },
    getSubCategoriesNivel1: function(catId){
      // return $http.get("http://localhost:8080/SomosGlobal/webresources/com.somosglobal.rest.categoria", {
        return $http.get("http://192.168.0.103:8080/SomosGlobal/webresources/com.somosglobal.rest.categoria/subcategory/1/"+catId
          // , {
          //       headers: {
          //           'Content-Type': 'application/json' , 
          //           'Access-Control-Allow-Origin': '*',
          //           'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          //           'Access-Control-Allow-Headers':'X-Requested-With' 
          //       }
          //     }
              ).then(function(response){
                console.log(response.data);
        categories = response.data;
        return categories;
      });
    },
    getSubCategoriesNivel2: function(catId){
      // return $http.get("http://localhost:8080/SomosGlobal/webresources/com.somosglobal.rest.categoria", {
        return $http.get("http://192.168.0.103:8080/SomosGlobal/webresources/com.somosglobal.rest.categoria/subcategory/2/"+catId
          // , {
          //       headers: {
          //           'Content-Type': 'application/json' , 
          //           'Access-Control-Allow-Origin': '*',
          //           'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          //           'Access-Control-Allow-Headers':'X-Requested-With' 
          //       }
          //     }
              ).then(function(response){
                console.log(response.data);
        categories = response.data;
        return categories;
      });
    },
    remove: function(id) {
      categories.splice(categories.indexOf(id), 1);
    },
    get: function(catId) {
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === parseInt(catId)) {
          return categories[i];
        }
      }
      return null;
    }
  };
});