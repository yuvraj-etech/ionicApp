(function() {
    'use strict';

    angular.module('ionicApp', ['ionic'])

            .run(function($ionicPlatform, $ionicHistory, $location, $state, $ionicPopup, $timeout) {
                $ionicPlatform.ready(function() {
                    if (window.cordova && window.cordova.plugins.Keyboard) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        cordova.plugins.Keyboard.disableScroll(true);
                    }
                    if (window.StatusBar) {
                        StatusBar.styleDefault();
                    }
                });
                var count = 0;
                $ionicPlatform.registerBackButtonAction(function() {
                    var currentView = $ionicHistory.currentView();
                    console.log(currentView.stateId);
                    if (currentView.stateId == 'app.home' && count == 0) {
                        count++;
                        $timeout(function() {
                            count = 0;
                        }, 3000);
                    }
                    else if (currentView.stateId == 'app.home' && count == 1) {
                        navigator.app.exitApp();
                        count = 0;
                    }
                    else {
                        $ionicHistory.goBack();
                        count = 0;
                    }
                }, 100);
            });
})();


