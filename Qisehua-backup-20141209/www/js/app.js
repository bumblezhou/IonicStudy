angular.module('Qisehua', ['ionic'])
.run(function($ionicPlatform, $ionicLoading, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    //var loading = $ionicLoading.show({
    //  content: '<img src="img/loading.gif" alt="加载中..." />'
    //});

    //$timeout(function() {
    //  $('#home-page-content').empty();
    //  $('<iframe src="http://www.klmyqsh.com" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#home-page-content');
    //  $ionicLoading.hide();
    //}, 2000);

  });
})

.controller('RootCtrl',function($scope, $ionicPopup, $ionicLoading, $timeout) {

  $scope.reloadHomePage = function(){
    //document.getElementById("qisehua-home-frame").src = "http://www.klmyqsh.com";
    var loading = $ionicLoading.show({
      content: '<img src="img/loading.gif" alt="加载中..." />'
    });

    $timeout(function() {
      $('#home-page-content').empty();
      $('<iframe src="http://www.klmyqsh.com" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#home-page-content');
      $ionicLoading.hide();
    }, 1000);

  };

  $scope.quitConfirm = function() {
    var quitPopup = $ionicPopup.confirm({
      title: '<strong>系统提示</strong>',
      template: '你确定要退出应用吗?',
      okText: '退出',
      cancelText: '取消'
    });

    quitPopup.then(function (res) {
      if (res) {
        ionic.Platform.exitApp();
        //navigator.app.exitApp();
      } else {
        // Don't close
      }
    });
  };

  $scope.dailConfirm = function() {
    var dailPopup = $ionicPopup.confirm({
      title: '<strong>系统提示</strong>',
      template: '拔号(0990-6977191)联系七色花吗?',
      okText: '拔号',
      cancelText: '取消'
    });

    dailPopup.then(function (res) {
      if (res) {
        //document.location.href = 'tel:0990-6977191';
        window.open('tel:0990-6977191', '_system');
      } else {
        // Don't close
      }
    });
  };

  // An alert dialog
  $scope.upgradeConfirm = function() {
    var upgradePopup = $ionicPopup.confirm({
      title: '<strong>系统提示</strong>',
      template: '确定升级最新版本吗?',
      okText: '升级',
      cancelText: '取消'
    });

    upgradePopup.then(function (res) {
      if (res) {
        //document.location.href = 'http://www.klmyqsh.com/klmyqsh.apk';
        window.open('http://www.klmyqsh.com/klmyqsh.apk', '_system');
      } else {
        // Don't close
      }
    });
  };

  // $scope.showSystemInfo = function() {
  //   var info = 'IsWebView:' + ionic.Platform.isWebView() + "<br />" +
  //   'Platform:' + ionic.Platform.platform() + "<br />" +
  //   'Version:' + ionic.Platform.version() + "<br />";
  //   var alertPopup = $ionicPopup.alert({
  //     title: '<strong>系统信息</strong>',
  //     template: info
  //   });
  //   alertPopup.then(function(res) {
  //     console.log('Thank you for not eating my delicious ice cream cone');
  //   });
  // };

});
