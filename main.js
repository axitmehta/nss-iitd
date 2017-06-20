
var app = angular.module('app', ['ngMaterial','ngAnimate','ngRoute','ngMessages','ngSanitize','angular-carousel']);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('teal', {
   'default': '400', // by default use shade 400 from the pink palette for primary intentions
   'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
   'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
   'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
  .accentPalette('orange');
});

app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider.when("/", {
    controller: "MainCtrl",
    templateUrl: "templates/home.html"
  }).when("/about_nss", {
    controller: "MainCtrl",
    templateUrl: "templates/about.nss.html"
  }).when("/about_domains", {
    controller: "MainCtrl",
    templateUrl: "templates/about.domains.html"
  }).when("/about_collabs", {
    controller: "CollabCtrl",
    templateUrl: "templates/about.collabs.html"
  }).when("/about_collabs_apply", {
    controller: "CollabCtrl",
    templateUrl: "templates/about.collabs.apply.html"
  }).when("/faq", {
    controller: "MainCtrl",
    templateUrl: "templates/about.faq.html"
  }).when("/internship", {
    controller: "MainCtrl",
    templateUrl: "templates/internship.html"
  }).when("/involve_internship", {
    controller: "MainCtrl",
    templateUrl: "templates/involve.internship.html"
  }).when("/involve_events", {
    controller: "MainCtrl",
    templateUrl: "templates/involve.events.html"
  }).when("/involve_volunteering", {
    controller: "MainCtrl",
    templateUrl: "templates/involve_volunteering.html"
  }).when("/download_magazine", {
    controller: "MainCtrl",
    templateUrl: "templates/download.magazine.html"
  }).when("/download_app", {
    controller: "MainCtrl",
    templateUrl: "templates/download.app.html"
  }).when("/download_report", {
    controller: "MainCtrl",
    templateUrl: "templates/download.report.html"
  }).when("/pending_hours", {
    controller: "MainCtrl",
    templateUrl: "templates/hours.pending.html"
  }).when("/hours_complaint", {
    controller: "MainCtrl",
    templateUrl: "templates/hours.complaint.html"
  }).when("/hours_policy", {
    controller: "MainCtrl",
    templateUrl: "templates/hours.policy.html"
  }).when("/download_report", {
    controller: "MainCtrl",
    templateUrl: "templates/download.report.html"
  }).when("/team_current", {
    controller: "TeamCtrl",
    templateUrl: "templates/team.current.html"
  }).when("/team_previous", {
    controller: "TeamCtrl",
    templateUrl: "templates/team.previous.html"
  }).otherwise({
    controller: "MainCtrl",
    templateUrl: "templates/error.html"
  });
}]);
