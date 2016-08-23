'use strict';

/**
 * @ngdoc overview
 * @name mytestPro6App
 * @description
 * # mytestPro6App
 *
 * Main module of the application.
 */
var WebRcTwo=angular
    .module('webRcTwoApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ]);
//angular
//  .module('webRcTwoApp', [
//    'ngAnimate',
//    'ngCookies',
//    'ngResource',
//    'ngRoute',
//    'ngSanitize',
//    'ngTouch'
//  ])
WebRcTwo.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/productPag', {
        templateUrl: 'views/productpag.html',
        controller: 'ProductpagCtrl',
        controllerAs: 'productPag'
      })
      .when('/price/priceIndex', {
        templateUrl: 'views/price/priceindex.html',
        controller: 'PricePriceindexCtrl',
        controllerAs: 'price/priceIndex'
      })
      .when('/services/serviceIndex', {
        templateUrl: 'views/services/serviceindex.html',
        controller: 'ServicesServiceindexCtrl',
        controllerAs: 'services/serviceIndex'
      })
      .when('/we/weIndex', {
        templateUrl: 'views/we/weindex.html',
        controller: 'WeWeindexCtrl',
        controllerAs: 'we/weIndex'
      })
      .when('/partners/partnerIndex', {
        templateUrl: 'views/partners/partnerindex.html',
        controller: 'PartnersPartnerindexCtrl',
        controllerAs: 'partners/partnerIndex'
      })
      .when('/introduce/introduceIdx', {
        templateUrl: 'views/introduce/introduceidx.html',
        controller: 'IntroduceIntroduceidxCtrl',
        controllerAs: 'introduce/introduceIdx'
      })
      .when('/loopGroups/loopGroupsIdx', {
        templateUrl: 'views/loopgroups/loopgroupsidx.html',
        controller: 'LoopgroupsLoopgroupsidxCtrl',
        controllerAs: 'loopGroups/loopGroupsIdx'
      })
      .when('/merchants/merchantsIdx', {
        templateUrl: 'views/merchants/merchantsidx.html',
        controller: 'MerchantsMerchantsidxCtrl',
        controllerAs: 'merchants/merchantsIdx'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
