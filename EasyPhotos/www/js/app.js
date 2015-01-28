// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('easyPhotos', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.backButton.text('返回').icon('ion-ios7-arrow-left');

  $stateProvider
  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'WelcomeCtrl'
  })
  .state('tabs', {
    url: '/tabs',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabsCtrl'
  })
  .state('tabs.home', {
    //cache: false,
    url: '/home',
    views: {
      'home-tab': {
        templateUrl: 'templates/home.html',
        controller: 'HomeTabCtrl'
      }
    }
  })
  .state('tabs.about-us', {
    //cache: false,
    url: '/about-us',
    views: {
      'about-us-tab': {
        templateUrl: 'templates/about-us.html',
        controller: 'AboutUsTabCtrl'
      }
    }
  })
  .state('tabs.service', {
    //cache: false,
    url: '/service',
    views: {
      'service-tab': {
        templateUrl: 'templates/service.html',
        controller: 'ServiceTabCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/welcome');

})

.controller('WelcomeCtrl', function($scope, $state, $timeout, $ionicLoading) {

  $scope.login = function() {
    var loading = $ionicLoading.show({
      content: '<img src="img/loading.gif" alt="加载中..." />'
    });
    $timeout(function() {
      $state.go('tabs.home');
      $ionicLoading.hide();
    }, 500);
  };

})

.controller('HomeTabCtrl', function($scope, $state) {
  console.log('HomeTabCtrl');

})

.controller('TabsCtrl', function($scope, $state, $ionicPopup, $ionicTabsDelegate) {
  console.log('TabsCtrl');
  $scope.tabsStyle = 'tabs-icon-top tabs-positive pane tabs-bottom tabs-standard';

  $scope.quitConfirm = function() {

    if(ionic.Platform.isAndroid()){
      ionic.Platform.exitApp();
      //navigator.app.exitApp();
    } else {
      $state.go('welcome');
    }

    // var quitPopup = $ionicPopup.confirm({
    //   title: '<strong>系统提示</strong>',
    //   template: '你确定要退出应用吗?',
    //   okText: '退出',
    //   cancelText: '取消'
    // });
    //
    // quitPopup.then(function (res) {
    //   if (res) {
    //     if(ionic.Platform.isAndroid()){
    //       ionic.Platform.exitApp();
    //       //navigator.app.exitApp();
    //     } else {
    //       $state.go('login');
    //     }
    //   } else {
    //     // Don't close
    //   }
    // });
  };
})

.controller('AboutUsTabCtrl', function($scope, $state, $ionicPopup, $ionicTabsDelegate) {
  console.log('AboutUsTabCtrl');
})

.controller('ServiceTabCtrl', function($scope, $state, $ionicPopup, $ionicTabsDelegate) {
  console.log('ServiceTabCtrl');
});
