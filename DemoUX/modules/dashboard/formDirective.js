"use strict";

angular.module("dashboard")

    .directive("formDirective", function () {

        return {
            scope: {
                title: '@',
                subtitle: '@',
                image: '@'
            },
            controller: "formController",
            templateUrl: "modules/dashboard/formTemplate.html"

        };

    });