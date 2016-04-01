"use strict";

angular.module("main")

    .directive("mainDirective", function () {

        return {
            scope: {
                title       : '@',
                subtitle    : '@', 
                image       : '@'
            },
            controller: "mainController",
            templateUrl: "modules/main/mainTemplate.html"

        };

    });