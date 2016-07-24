'use strict';

angular.module('starter.ShopServices', [])
.factory('Shops', function() {
/*
var str ="";
for (var i = 1; i < 21; i++) {
  str += '{ "id" :"'+i+'", "name": "Local '+i+'", "img":  "img/category/logos/logo'+i+'.jpg" },';
}
str += str +' { "id": "21", "name": "Local 21", "img": "img/category/logos/logo21.jpg" } ' ;

var shops = JSON.parse( "["+str +"]" );  
*/
  var shops = [{
    id: 1,
    name: 'Bela Express',
    logoId: '1',
    catId: '2',
    img : 'img/category/logos/logo1.jpg'
  },
  {
    id: 6,
    name: 'Carolina Inn',
    logoId: '6',
    catId: '6',
    img : 'img/category/logos/logo6.jpg'
  },
  {
    id: 4,
    name: 'Chakra',
    logoId: '4',
    catId: '1',
    img : 'img/category/logos/logo4.jpg'
  }
  ,
  {
    id: 20,
    name: 'Clinica Primavera',
    logoId: '20',
    catId: '1',
    img : 'img/category/logos/logo20.jpg'
  }
  ,
  {
    id: 8,
    name: 'Dr Celular',
    logoId: '8',
    catId: '4',
    img : 'img/category/logos/logo8.jpg'
  }
  ,
  {
    id: 5,
    name: 'Parrillon',
    logoId: '5',
    catId: '0',
    img : 'img/category/logos/logo5.jpg'
  }
  ,
  {
    id: 17,
    name: 'Chosen Bar',
    logoId: '17',
    catId: '0',
    img : 'img/category/logos/logo17.jpg'
  },
  {
    id: 32,
    name: 'Kubamed',
    logoId: '32',
    catId: '1',
    img : 'img/category/logos/logo32.jpg'
  },
  {
    id: 27,
    name: 'Evelyn',
    logoId: '27',
    catId: '3',
    img : 'img/category/logos/logo27.jpg'
  }
    
  ];

  return {

    all: function() {
      return shops;
    },
    remove: function(id) {
      shops.splice(shops.indexOf(id), 1);
    },
    get: function(shopId) {
      for (var i = 0; i < shops.length; i++) {
        if (shops[i].id === parseInt(shopId)) {
          return shops[i];
        }
      }
      return null;
    }
  };
});