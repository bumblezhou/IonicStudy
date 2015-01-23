// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ionicApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('forget-password', {
    url: '/forget-password',
    templateUrl: 'templates/forget-password.html'
  })
  .state('tabs', {
    url: '/tabs',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tabs.home', {
    url: '/home',
    views: {
      'home-tab': {
        templateUrl: 'templates/home.html',
        controller: 'HomeTabCtrl'
      }
    }
  })
  .state('tabs.charts', {
    url: '/charts',
    views: {
      'charts-tab': {
        templateUrl: 'templates/charts.html'
      }
    }
  })
  .state('tabs.about', {
    url: '/about',
    views: {
      'about-tab': {
        templateUrl: 'templates/about.html'
      }
    }
  })
  .state('tabs.settings', {
    url: '/settings',
    views: {
      'settings-tab': {
        templateUrl: 'templates/settings.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');

})

.controller('LoginCtrl', function($scope, $state, $ionicPopup) {

  localStorage.removeItem("username");
  $scope.login = function(user) {
    if(user && typeof(user.username) != "undefined" && user.username == "zhou" && typeof(user.password) != "undefined" && user.password == "iloveyou@1014"){
      console.log('login', user);
      localStorage.setItem("username", user.username);
      $state.go('tabs.home');
    } else {
      var alertPopup = $ionicPopup.alert({
        title: '系统提示',
        template: '用户名或密码错误，请确认！'
      });
      alertPopup.then(function(res) {
        $state.go('login');
      });
    }
  };

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
