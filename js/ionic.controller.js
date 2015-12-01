(function() {
    'use strict';

    angular.module('ionicApp')

            .controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPlatform, $ionicHistory, $state) {

                // Create the login modal that we will use later
                $ionicModal.fromTemplateUrl('templates/login.html', {
                    scope: $scope
                }).then(function(modal) {
                    $scope.modal = modal;
                });

                // Triggered in the login modal to close it
                $scope.closeLogin = function() {
                    $scope.modal.hide();
                };

                // Open the login modal
                $scope.login = function() {
                    $scope.modal.show();
                };
                $scope.goContactUs = function() {
                    $state.go('app.contactUs');
                };
                $scope.goHome = function() {
                    $state.go('app.home');
                };
                $scope.goAboutUs = function() {
                    $state.go('app.aboutUs');
                };
            });

})();