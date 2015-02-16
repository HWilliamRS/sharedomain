'use strict';

/**
 * @ngdoc function
 * @name sharedomainFrontendApp.controller:ShowsCtrl
 * @description
 * # ShowsCtrl
 * Controller of the sharedomainFrontendApp
 */
angular.module('sharedomainFrontendApp')
  .controller('ShowsCtrl', function ($scope,$http) {
   		$http.get('/api/shows').then(function(result) {
    	$scope.shows = result.data;
  	});
  });
