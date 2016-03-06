// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var mobileCommunityApp = angular.module('starter', ['ionic', 'ngCordova']);

mobileCommunityApp.run(function($ionicPlatform, $cordovaGeolocation, $interval) {
  $ionicPlatform.ready(function() {

    //设置键盘属性
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }

    //设置状态栏属性
    if(window.StatusBar) {
      //StatusBar.styleDefault();
      StatusBar.hide();
    }

    //获取地理坐标开始
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    var getLocation = function () {
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
          console.log(position.coords);
        }, function(err) {
          // error'
          console.log(err);
        });
    };
    getLocation();
    //$interval(getLocation, 3000); // 3 seconds for now
    //获取地理坐标结束

  });
});

mobileCommunityApp.controller('IndexCtrl', function($scope, $state, $timeout, $ionicLoading) {
  console.log('IndexCtrl');
  var loading = $ionicLoading.show({
    template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.wap.sbgwcs.com/xshop/shopHome.php" style="min-height:100vh;" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#main_content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

});
