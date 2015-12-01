(function() {
    'use strict';

    angular.module('ionicApp')
            .config(function($stateProvider, $urlRouterProvider) {
                $stateProvider
                        .state('app', {
                            url: '/app',
                            abstract: true,
                            templateUrl: 'templates/menu.html',
                            controller: 'AppCtrl'
                        })
                        .state('app.home', {
                            url: '/home',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/home.html'
                                }
                            }
                        })
                        .state('app.aboutUs', {
                            url: '/aboutUs',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/aboutUs.html'
                                }
                            }
                        })
                        .state('app.contactUs', {
                            url: '/contactUs',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/contactUs.html',
                                }
                            }
                        });
                $urlRouterProvider.otherwise('/app/home');
            });

})();