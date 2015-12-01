(function() {
    'use strict';

    angular.module('ionicApp', ['ionic'])

            .run(function($ionicPlatform, $ionicHistory, $location, $state) {
                $ionicPlatform.ready(function() {
                    if (window.cordova && window.cordova.plugins.Keyboard) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        cordova.plugins.Keyboard.disableScroll(true);
                    }
                    if (window.StatusBar) {
                        StatusBar.styleDefault();
                    }
                });
                $ionicPlatform.registerBackButtonAction(function() {
                    if ($state.current.url == "/app/home") {
                        ionic.Platform.exitApp();
                    } else {
                        $ionicHistory.goBack();
                    }
                });
            });
})();