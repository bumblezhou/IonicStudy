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
  .state('tabs', {
    url: '/tabs',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabsCtrl'
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
  .state('tabs.map', {
    url: '/map',
    views: {
      'map-tab': {
        templateUrl: 'templates/map.html',
        controller: 'MapTabCtrl'
      }
    }
  })
  .state('tabs.about', {
    url: '/about',
    views: {
      'about-tab': {
        templateUrl: 'templates/about.html',
        controller: 'AboutTabCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');

})

.controller('LoginCtrl', function($scope, $state, $timeout, $ionicLoading) {

  $scope.login = function() {
    var loading = $ionicLoading.show({
      content: '<img src="img/loading.gif" alt="加载中..." />'
    });
    $timeout(function() {
      $state.go('tabs.home');
      $ionicLoading.hide();
    }, 1000);
  };

})

.controller('HomeTabCtrl', function($scope, $state) {
  console.log('HomeTabCtrl');

  $scope.title = "首页";

  $scope.goToMarket = function(){
    window.open('http://www.sbgwcs.com', _system);
  };

  $scope.goToCatering = function(){
    window.open('http://www.dc.klmyms.com', _system);
  };

  $scope.goToMedcineShop = function(){
    window.open('http://www.klmyxtyd.com', _system);
  };

  $scope.goToFlowerMarket = function(){
    window.open('http://www.hny.sbgwcs.com', _system);
  };

  $scope.goToServiceSite = function(){
    window.open('http://www.fw.sbgwcs.com', _system);
  };

  $scope.goToBusinessPage = function(){
    window.open('http://www.qsh.sbgwcs.com', _system);
  };

  $scope.goToAboutUsPage = function(){
    window.open('http://www.klmyqsh.com', _system);
  };

  $scope.goToNewsPage = function(){
    window.open('http://www.klmyqsh.com/news/news.php?lang=cn&class2=4', _system);
  };

  $scope.goToFriendlyLinks = function(){
    window.open('http://www.klmyqsh.com/link/', _system);
  };
})

.controller('MapTabCtrl', function($scope, $state) {
  console.log('MapTabCtrl');

  // 百度地图API功能
  var mapopts = {
    enableMapClick:false
  }
  var map = new BMap.Map("allmap",mapopts);
  map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_ZOOM}));
  map.disableDoubleClickZoom();
  var point = new BMap.Point(84.860936,45.603875);
  map.centerAndZoom(point, 16);
  var marker = new BMap.Marker(point);  // 创建标注
  var offset=new BMap.Size(10,-20);
  map.addOverlay(marker);

  var opts = {
    //width : 200,     // 信息窗口宽度
    //height: 60,     // 信息窗口高度
    title : '<b>克拉玛依七色花电子商务有限公司</b>' , // 信息窗口标题
    enableMessage:false,//设置允许信息窗发送短息
    enableCloseOnClick:false,
    message:'克拉玛依七色花电子商务有限公司',
    offset:offset
  }
  var infoWindow = new BMap.InfoWindow('<div style="border-top:1px solid #999; margin:5px 0px 0px; padding-top:5px;">地址：克拉玛依天山路副51号<br />电话：0990-6977191<br />QQ:88276429</div>', opts);  // 创建信息窗口对象
  map.openInfoWindow(infoWindow,point); //开启信息窗口
  function showInfo(e){
    map.openInfoWindow(infoWindow,point);
  }
  marker.addEventListener("click", showInfo);

})

.controller('AboutTabCtrl', function($scope, $state) {
  console.log('AboutTabCtrl');
})

.controller('TabsCtrl', function($scope, $state, $ionicPopup) {

  $scope.whetherHideItem = ionic.Platform.isIOS() ? 'hide' : '';

  $scope.quitConfirm = function() {
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
          //navigator.app.exitApp();
        } else {
          $state.go('login');
        }
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
