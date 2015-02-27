'use strict';

/**
 * @ngdoc overview
 * @name angularCalendarHeatmapApp
 * @description
 * # angularCalendarHeatmapApp
 *
 * Main module of the application.
 */
angular
  .module('angularCalendarHeatmapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'calHeatmap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
