(function() {
    'use strict';

    angular
        .module('app', [
          'app.droplists',
          'app.stockers',
          'app.buildings',
          'app.drivers',
          'app.users'
        ])
        .value('apiUrl', 'http://localhost:49828/api/')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/landing');

            $stateProvider
                .state('landing', {
                    url: '/landing', //http:localhost:3000/#/dashboard
                    controller: 'LandingController as landingCtrl', //ngcontroller
                    templateUrl: 'app/landing/landing.html'
                });

            $stateProvider
                .state('stockersDashboard', {
                    url: '/stockersDashboard', //http:localhost:3000/#/dashboard
                    controller: 'stockersDashboardController as stockersDashboardCtrl', //ngcontroller
                    templateUrl: 'app/stockersDashboard/stockersDashboard.html'
                });

            $stateProvider
                .state('driversDashboard', {
                    url: '/driversDashboard', //http:localhost:3000/#/dashboard
                    controller: 'driversDashboardController as driversDashboardCtrl', //ngcontroller
                    templateUrl: 'app/driversDashboard/driversDashboard.html'
                });
                $stateProvider
                    .state('droplists.detail', {
                        url: '/droplists/detail', //http:localhost:3000/#/dashboard
                        controller: 'droplistsController as droplistsCtrl', //ngcontroller
                        templateUrl: 'app/droplists/droplists.detail.html'
                    });
                    $stateProvider
                        .state('droplists.grid', {
                            url: '/droplists/grid', //http:localhost:3000/#/dashboard
                            controller: 'droplistsController as droplistsCtrl', //ngcontroller
                            templateUrl: 'app/droplists/droplists.grid.html'
                        });
        });
})();
