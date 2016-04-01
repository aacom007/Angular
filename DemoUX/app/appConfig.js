"use strict";

angular.module('app')

    .config(['$routeProvider', function ($routeProvider) {

        var routes = [
           {
               url: '/main',
               template: '<h1>Forms</h1>'
           }

        ];
            
        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.config);
        });

        $routeProvider.otherwise({ redirectTo: '/' });

    }]);