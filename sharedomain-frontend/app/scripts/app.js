'use strict';

/**
 * @ngdoc overview
 * @name sharedomainFrontendApp
 * @description
 * # sharedomainFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('sharedomainFrontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $locationProvider.html5Mode({enabled:true,requireBase: false});

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/shows', {
        templateUrl: 'views/shows.html',
        controller: 'ShowsCtrl'
      })
      .otherwise({
        redirectTo: '/shows'
      });
  });
