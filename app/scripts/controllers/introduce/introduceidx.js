'use strict';

/**
 * @ngdoc function
 * @name webRcTwoApp.controller:IntroduceIntroduceidxCtrl
 * @description
 * # IntroduceIntroduceidxCtrl
 * Controller of the webRcTwoApp
 */
angular.module('webRcTwoApp')
  .controller('IntroduceIntroduceidxCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    scollIsHidden("0");
  });
