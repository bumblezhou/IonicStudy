angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

    .state('page1', {
      url: '/login',
      templateUrl: 'templates/page1.html'
    })
        .state('tabsController.page4', {
      url: '/index',
      views: {
        'tab1': {
          templateUrl: 'templates/page4.html'
        }
      }
    })
        .state('tabsController.page5', {
      url: '/eartag',
      views: {
        'tab4': {
          templateUrl: 'templates/page5.html'
        }
      }
    })
        .state('tabsController.page6', {
      url: '/chipset',
      views: {
        'tab2': {
          templateUrl: 'templates/page6.html'
        }
      }
    })
        .state('tabsController', {
      url: '/index',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
        .state('tabsController.page7', {
      url: '/about',
      views: {
        'tab3': {
          templateUrl: 'templates/page7.html'
        }
      }
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');


});