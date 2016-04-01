"use strict";

angular.module("menu")

    .controller("menuController",
        ['$scope', '$rootScope', function ($scope, $rootScope) {

            this.getActiveElement = function () {
                return $scope.activeElement;
            }

            this.setActiveElement = function (el) {
                $scope.activeElement = el;
            }

            this.setRoute = function (route) {
                $rootScope.$broadcast('ux-menu-item-selected-event', { route: route });
            }
        }]
    );