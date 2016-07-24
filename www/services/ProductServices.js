'use strict';

angular.module('starter.ProductServices', [])
.factory('Products', function() {
/*
var str ="";
for (var i = 1; i < 21; i++) {
  str += '{ "id" :"'+i+'", "logoId" :"'+i+'", "name": "Producto '+i+'", "img":  "img/category/products/product'+i+'.jpg" },';
}
str += str +' { "id": "21","logoId": "21", "name": "Producto 21", "img": "img/category/products/product21.jpg" } ' ;

var products = JSON.parse( "["+str +"]" );  
*/


  var products = [{
    id: 1,
    name: 'Bela Express: Pedicure',
    logoId: '1',
    catId: '2',
    img1: 'img/category/products/BelaExpress1_2/imagen1.jpg',
    img2: 'img/category/products/BelaExpress1_2/imagen2.jpg',
    img3: 'img/category/products/BelaExpress1_2/imagen3.jpg',
    cost: '40',
    unit: 'ptos'
  },
  {
    id: 6,
    name: 'Carolina Inn',
    logoId: '6',
    catId: '6',
    img1: 'img/category/products/CarolinaInn6_6/imagen1.jpg',
    img2: 'img/category/products/CarolinaInn6_6/imagen2.jpg',
    img3: 'img/category/products/CarolinaInn6_6/imagen3.jpg',
    cost: '35',
    unit: 'ptos'
  },
  {
    id: 4,
    name: 'Chakra',
    logoId: '4',
    catId: '1',
    img1: 'img/category/products/Chakra4_1/imagen1.jpg',
    img2: 'img/category/products/Chakra4_1/imagen2.jpg',
    img3: 'img/category/products/Chakra4_1/imagen3.jpg',
    cost: '100',
    unit: 'ptos'
  }
  ,
  {
    id: 20,
    name: 'Clinica Primavera',
    logoId: '20',
    catId: '1',
    img1: 'img/category/products/ClinicaPrimavera20_1/imagen1.jpg',
    img2: 'img/category/products/ClinicaPrimavera20_1/imagen2.jpg',
    img3: 'img/category/products/ClinicaPrimavera20_1/imagen3.jpg',
    cost: '20000',
    unit: 'ptos'
  }
  ,
  {
    id: 8,
    name: 'DrCelular',
    logoId: '8',
    catId: '4',
    img1: 'img/category/products/DrCelular8_4/imagen1.jpg',
    img2: 'img/category/products/DrCelular8_4/imagen2.jpg',
    img3: 'img/category/products/DrCelular8_4/imagen3.jpg',
    cost: '5000',
    unit: 'ptos'
  }
  ,
  {
    id: 5,
    name: 'Parrillon',
    logoId: '5',
    catId: '0',
    img1: 'img/category/products/Parrillon5_0/imagen1.jpg',
    img2: 'img/category/products/Parrillon5_0/imagen2.jpg',
    img3: 'img/category/products/Parrillon5_0/imagen3.jpg',
    cost: '5600',
    unit: 'ptos'
  }
  ,
  {
    id: 17,
    name: 'Chosen Bar',
    logoId: '17',
    catId: '0',
    img1: 'img/category/products/ChosenBar17_0/imagen1.jpg',
    img2: 'img/category/products/ChosenBar17_0/imagen2.jpg',
    img3: 'img/category/products/ChosenBar17_0/imagen3.jpg',
    cost: '13000',
    unit: 'ptos'
  },
  {
    id: 27,
    name: 'Tiendas Evelyn',
    logoId: '27',
    catId: '0',
    img1: 'img/category/products/Evelyn27_3/imagen4.jpg',
    img2: 'img/category/products/Evelyn27_3/imagen2.jpg',
    img3: 'img/category/products/Evelyn27_3/imagen3.jpg',
    cost: '9900',
    unit: 'ptos'
  }
    
  ];

  return {
    all: function() {
      return products;
    },
    remove: function(id) {
      products.splice(products.indexOf(id), 1);
    },
    get: function(productId) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(productId)) {
          return products[i];
        }
      }
      return null;
    }
  };
});