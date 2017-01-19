console.log('hey')

var app = angular.module('highwayApp2', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider

})
