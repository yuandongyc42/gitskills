'use strict';

/**
 * @ngdoc function
 * @name mytestPro6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytestPro6App
 */
angular.module('webRcTwoApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      //$scope.scollHidden=function (){
      //    var styObj=document.body.style;
      //    styObj.overflow="hidden";
      //    //styObj.overflow="auto";
      //};
      //
      //$scope.scollHidden();

      scollIsHidden("1");
  });
