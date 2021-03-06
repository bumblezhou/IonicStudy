// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var qisehuaApp = angular.module('qisehuaApp', ['ionic', 'ionic.service.core', 'ionic.service.push', 'ngCordova']);

qisehuaApp.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // Your App ID
    app_id: '07af441c',
    // The public API key services will use for this app
    api_key: '75e243c2b9fdff1f64099ad272893df25c0d572e77708176',
    // Your GCM sender ID/project number (Uncomment if supporting Android)
    //gcm_id: 'YOUR_GCM_ID'
  });

}])

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
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('index', {
    url: '/index',
    templateUrl: 'templates/index.html',
    controller: 'IndexCtrl'
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
  .state('tabs.super-market', {
    url: '/super-market',
    views: {
      'home-tab': {
        templateUrl: 'templates/super-market/index.html',
        controller: 'SuperMarketCtrl'
      }
    }
  })
  .state('tabs.catering', {
    url: '/catering',
    views: {
      'home-tab': {
        templateUrl: 'templates/catering/index.html',
        controller: 'CateringCtrl'
      }
    }
  })
  .state('tabs.pharmacy', {
    url: '/pharmacy',
    views: {
      'home-tab': {
        templateUrl: 'templates/pharmacy/index.html',
        controller: 'PharmacyCtrl'
      }
    }
  })
  .state('tabs.flower', {
    url: '/flower',
    views: {
      'home-tab': {
        templateUrl: 'templates/flower/index.html',
        controller: 'FlowerCtrl'
      }
    }
  })
  .state('tabs.service', {
    url: '/service',
    views: {
      'home-tab': {
        templateUrl: 'templates/service/index.html',
        controller: 'ServiceCtrl'
      }
    }
  })
  .state('tabs.business', {
    url: '/business',
    views: {
      'home-tab': {
        templateUrl: 'templates/business/index.html',
        controller: 'BusinessCtrl'
      }
    }
  })
  .state('tabs.about-us', {
    url: '/about-us',
    views: {
      'home-tab': {
        templateUrl: 'templates/about-us/index.html',
        controller: 'AboutUsCtrl'
      }
    }
  })
  .state('tabs.districts', {
    url: '/districts',
    views: {
      'home-tab': {
        templateUrl: 'templates/districts/index.html',
        controller: 'DistrictsCtrl'
      }
    }
  })
  // .state('tabs.news', {
  //   url: '/news',
  //   views: {
  //     'home-tab': {
  //       templateUrl: 'templates/news/index.html',
  //       controller: 'NewsCtrl'
  //     }
  //   }
  // })
  .state('tabs.qrcode-scanner', {
    url: '/qrcode-scanner/:location',
    views: {
      'home-tab': {
        templateUrl: 'templates/qrcode-scanner/index.html',
        controller: 'QrcodeScannerCtrl'
      }
    }
  })
  // .state('tabs.friendly-links', {
  //   url: '/friendly-links',
  //   views: {
  //     'home-tab': {
  //       templateUrl: 'templates/friendly-links/index.html',
  //       controller: 'FriendlyLinksCtrl'
  //     }
  //   }
  // })
  .state('tabs.map', {
    //cache: false,
    url: '/map',
    views: {
      'map-tab': {
        templateUrl: 'templates/map.html',
        controller: 'MapTabCtrl'
      }
    }
  })
  .state('tabs.contacts', {
    //cache: false,
    url: '/contacts',
    views: {
      'contacts-tab': {
        templateUrl: 'templates/contacts.html',
        controller: 'ContactsTabCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');

})

.controller('NavBarCtrl', function($scope, $state, $ionicNavBarDelegate, $ionicTabsDelegate) {
  console.log('NavBarCtrl');
  $scope.goBackHandler = function() {
    $("#main-tabs").attr("class", 'tabs-icon-top tabs-positive pane tabs-bottom tabs-standard');
    //$ionicTabsDelegate.select(0);
    $state.go('login');
  };
})

.controller('LoginCtrl', function($scope, $state, $timeout, $ionicLoading) {

  $scope.login = function() {
    var loading = $ionicLoading.show({
      template: '<img src="img/loading.gif" alt="加载中..." />'
    });
    $timeout(function() {
      $state.go('index');
      $ionicLoading.hide();
    }, 500);
  };

  // $scope.enterWechatOfficialAccount = function(){
  //   //window.location.href = "weixin://contacts/profile/klmysbgwcs";
  // };
})

.controller('IndexCtrl', function($scope, $state, $timeout, $ionicLoading) {
  console.log('IndexCtrl');
  var loading = $ionicLoading.show({
    template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.wap.sbgwcs.com/xshop/shopHome.php" style="min-height:100vh;" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#index-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

})

.controller('HomeTabCtrl', function($scope, $state, $cordovaBarcodeScanner) {
  console.log('HomeTabCtrl');
  //肉品追踪
  $scope.scanQrcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      //alert(imageData.text);
      $scope.scanResult = "";
      $scope.scanFormat = "";
      console.log("Barcode Format -> " + imageData.format);
      console.log("Barcode Text -> " + imageData.text);
      console.log("Cancelled -> " + imageData.cancelled);
      //$scope.scanResult = imageData.text;
      //$scope.scanFormat = imageData.format;
      //$state.go("tabs.qrcode-scanner", { location: 'http://' + 'www.klmyqsh.com/zs?id=y0000002141' });
      if(!imageData.cancelled){
        $state.go("tabs.qrcode-scanner", { location: imageData.text });
      }

    }, function(error) {
      //$scope.scanResult = "扫描出错！详细信息：" + error;
      //$scope.scanFormat = "";
      console.log("An error happened -> " + error);
    });
  };

})

.controller('SuperMarketCtrl', function($scope, $state, $timeout, $ionicLoading){
  console.log('SuperMarketCtrl');
  var loading = $ionicLoading.show({
   template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.sbgwcs.com" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#super-market-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

  $("#main-tabs").attr("class", 'tabs-icon-top tabs-positive pane tabs-bottom tabs-standard tabs-item-hide');

})

.controller('CateringCtrl', function($scope, $state, $timeout, $ionicLoading){
  console.log('CateringCtrl');
  var loading = $ionicLoading.show({
    template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.dc.klmyms.com" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#catering-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

  $("#main-tabs").attr("class", 'tabs-icon-top tabs-positive pane tabs-bottom tabs-standard tabs-item-hide');

})

.controller('PharmacyCtrl', function($scope, $state, $timeout, $ionicLoading){
  console.log('PharmacyCtrl');
  var loading = $ionicLoading.show({
    template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.klmyxtyd.com" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#pharmacy-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

  $("#main-tabs").attr("class", 'tabs-icon-top tabs-positive pane tabs-bottom tabs-standard tabs-item-hide');

})

.controller('FlowerCtrl', function($scope, $state, $timeout, $ionicLoading){
  console.log('FlowerCtrl');
  var loading = $ionicLoading.show({
    template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.hny.sbgwcs.com" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#flower-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

  $("#main-tabs").attr("class", 'tabs-icon-top tabs-positive pane tabs-bottom tabs-standard tabs-item-hide');

})

.controller('ServiceCtrl', function($scope, $state, $timeout, $ionicLoading){
  console.log('ServiceCtrl');
  var loading = $ionicLoading.show({
    template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.fw.sbgwcs.com" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#service-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

  $("#main-tabs").attr("class", 'tabs-icon-top tabs-positive pane tabs-bottom tabs-standard tabs-item-hide');

})

.controller('BusinessCtrl', function($scope, $state, $timeout, $ionicLoading){
  console.log('BusinessCtrl');
  var loading = $ionicLoading.show({
    template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.qsh.sbgwcs.com" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#business-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

})

.controller('AboutUsCtrl', function($scope, $state, $timeout, $ionicLoading){
  console.log('AboutUsCtrl');
  var loading = $ionicLoading.show({
    template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.klmyqsh.com/about/" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#about-us-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

})

.controller('DistrictsCtrl', function($scope, $state, $timeout, $ionicLoading){
  console.log('DistrictsCtrl');
  var loading = $ionicLoading.show({
    template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="http://www.klmyqsh.com/zhsq/" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#districts-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

})

// .controller('NewsCtrl', function($scope, $state, $timeout, $ionicLoading){
//   console.log('NewsCtrl');
//   var loading = $ionicLoading.show({
//     template: '<img src="img/loading.gif" alt="加载中..." />'
//   });
//
//   $('<iframe id="nav-view-main-frame" src="http://www.klmyqsh.com/news/news.php?lang=cn&class2=4" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#news-page-content .scroll');
//   $("#nav-view-main-frame").load(function(){
//     $ionicLoading.hide();
//   });
//
// })

.controller('QrcodeScannerCtrl', function($scope, $state, $stateParams, $timeout, $ionicLoading){
  console.log('QrcodeScannerCtrl');

  var loading = $ionicLoading.show({
   template: '<img src="img/loading.gif" alt="加载中..." />'
  });

  $('<iframe id="nav-view-main-frame" src="' + $stateParams.location + '" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#qrcode-scanner-page-content .scroll');
  $("#nav-view-main-frame").load(function(){
    $ionicLoading.hide();
  });

})

// .controller('FriendlyLinksCtrl', function($scope, $state, $timeout, $ionicLoading){
//   console.log('FriendlyLinksCtrl');
//   var loading = $ionicLoading.show({
//     template: '<img src="img/loading.gif" alt="加载中..." />'
//   });
//
//   $('<iframe id="nav-view-main-frame" src="http://www.klmyqsh.com/link/" height="100%" width="100%" frameborder="0"></iframe>').appendTo('#friendly-links-page-content .scroll');
//   $("#nav-view-main-frame").load(function(){
//     $ionicLoading.hide();
//   });
//
// })

.controller('MapTabCtrl', function($scope, $state, $ionicLoading, $compile) {
  console.log('MapTabCtrl');

  // 百度地图API功能
  var mapopts = {
    enableMapClick:false
  }
  var map = new BMap.Map("map", mapopts);
  //map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT, type: BMAP_NAVIGATION_CONTROL_ZOOM}));
  //map.disableDoubleClickZoom();
  var point = new BMap.Point(84.860936,45.603875);
  map.centerAndZoom(point, 16);

  //创建标注
  var marker = new BMap.Marker(point);
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
  var infoWindow = new BMap.InfoWindow('<div style="border-top:1px solid #999; margin:5px 0px 0px; padding-top:5px;">地址：克拉玛依天山路副51号<br />电话：0990-6977191<br /> QQ：88276429</div>', opts);
  // 创建信息窗口对象
  map.openInfoWindow(infoWindow,point); //开启信息窗口
  function showInfo(e){
    map.openInfoWindow(infoWindow,point);
  }
  marker.addEventListener("click", showInfo);

})

.controller('ContactsTabCtrl', function($scope, $state) {
  console.log('ContactsTabCtrl');

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

})

.controller('TabsCtrl', function($scope, $state, $ionicPopup, $ionicTabsDelegate) {
  console.log('TabsCtrl');

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
