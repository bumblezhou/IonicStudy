angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })




    .state('tabsController', {
      url: '/index',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })





    .state('tabsController.home', {
      url: '/home',
      views: {
        'tab_home': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })





    .state('tabsController.separation', {
      url: '/separation',
      views: {
        'tab_separation': {
          templateUrl: 'templates/separation.html',
          controller: 'separationCtrl'
        }
      }
    })





    .state('tabsController.quarantine', {
      url: '/quarantine',
      views: {
        'tab_quarantine': {
          templateUrl: 'templates/quarantine.html',
          controller: 'quarantineCtrl'
        }
      }
    })




    .state('tabsController.freeze', {
      url: '/freeze',
      views: {
        'tab_freeze': {
          templateUrl: 'templates/freeze.html',
          controller: 'freezeCtrl'
        }
      }
    })





    .state('tabsController.deliver', {
      url: '/deliver',
      views: {
        'tab_deliver': {
          templateUrl: 'templates/deliver.html',
          controller: 'deliverCtrl'
        }
      }
    })




    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
