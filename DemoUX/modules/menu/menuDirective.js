"use strict";

angular.module("menu")

    .directive("menuDirective", function () {

        return {
            restrict:       'E',
            templateUrl:    'modules/menu/menuTemplate.html',
            controller:     'menuController',
            link: function (scope, el, attr, ctrl) {
                scope.activeIcon = function () {
                    return el = ctrl.getActiveElement();
                }

                el.on('click', function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    scope.$apply(function () {
                        ctrl.setActiveElement(el);
                        ctrl.setRoute(scope.route);
                    });
                });

            },
            scope: {
                label:      '@',
                icon:       '@',
                route:      '@'
            }
        };
    });