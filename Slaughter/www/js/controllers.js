angular.module('app.controllers', [])

.controller('loginCtrl', function($scope, $state, $timeout, $ionicLoading) {
  $scope.login = function() {
    var loading = $ionicLoading.show({
      content: '<img src="img/loading.gif" alt="加载中..." />'
    });
    $timeout(function() {
      $state.go('tabsController.home');
      $ionicLoading.hide();
    }, 500);
  };
  $scope.register = function() {
    var loading = $ionicLoading.show({
      content: '<img src="img/loading.gif" alt="加载中..." />'
    });
    $timeout(function() {
     $state.go('tabsController.home');
     $ionicLoading.hide();
    }, 500);
  };
})

.controller('tabsController', function($scope, $state, $ionicPopup, $ionicTabsDelegate) {
  console.log('tabsController');

  $scope.whetherHideItem = ionic.Platform.isIOS() ? 'hide' : '';
  $scope.tabsStyle = 'tabs-icon-top tabs-positive pane tabs-bottom tabs-standard';

  $scope.quitConfirm = function() {

    if(ionic.Platform.isAndroid()){
      //ionic.Platform.exitApp();
      var quitPopup = $ionicPopup.confirm({
        title: '<strong>系统提示</strong>',
        template: '你确定要退出应用吗?',
        okText: '退出',
        cancelText: '取消'
      });

      quitPopup.then(function (res) {
        if (res) {
          if(ionic.Platform.isAndroid()){
            ionic.Platform.exitApp();
          } else {
            $state.go('login');
          }
        } else {
          // Don't close
        }
      });

    } else {
      $state.go('login');
    }

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
        //window.location.href = 'http://www.klmyqsh.com/klmyqsh.apk';
        window.open('http://www.klmyqsh.com/slaughter.apk', '_system');
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
})

.controller('homeCtrl', function($scope) {

})

.controller('separationCtrl', function($scope) {

})

.controller('quarantineCtrl', function($scope) {

})

.controller('freezeCtrl', function($scope) {

})

.controller('deliverCtrl', function($scope) {

})
