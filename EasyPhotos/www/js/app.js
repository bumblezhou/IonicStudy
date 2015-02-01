// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('easyPhotos', ['ionic', 'ngCordova'])

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
    url: '/home',
    views: {
      'home-tab': {
        templateUrl: 'templates/home.html',
        controller: 'HomeTabCtrl'
      }
    }
  })
  .state('tabs.about-us', {
    url: '/about-us',
    views: {
      'about-us-tab': {
        templateUrl: 'templates/about-us.html',
        controller: 'AboutUsTabCtrl'
      }
    }
  })
  .state('tabs.service', {
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

.controller('HomeTabCtrl', function($scope, $state, $ionicActionSheet, $timeout, $cordovaCamera, $cordovaGeolocation, $cordovaFileTransfer) {
  console.log('HomeTabCtrl');

  $scope.myImgUrl = 'http://placehold.it/320x568';

  // Get current Geo Position
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
    $scope.lat  = position.coords.latitude;
    $scope.long = position.coords.longitude;
  }, function(err) {
    // error
  });

  $scope.takeImage = function(){
    document.addEventListener("deviceready", function () {
      var options = {
        quality: 50,
        //destinationType: Camera.DestinationType.DATA_URL,
        destinationType: Camera.DestinationType.FILE_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions
      };

      // $cordovaCamera.getPicture(options).then(function(imageData) {
      //   var image = document.getElementById('myImage');
      //   image.src = "data:image/jpeg;base64," + imageData;
      //   uploadImageConfirm();
      // }, function(err) {
      //   // error
      // });
      $cordovaCamera.getPicture(options).then(function(imageURI) {
        $scope.myImgUrl = imageURI;
      }, function(err) {
        // error
      });
    }, false);
  };

  // Triggered on a button click, or some other target
  $scope.uploadImageConfirm = function() {
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '<b>上传</b>' },
        { text: '重拍' }
      ],
      // destructiveText: '删除',
      titleText: '系统提示',
      //cancelText: '取消',
      //cancel: function() {
      //  console.log('Cancel Button Clicked.');
      //  $scope.myImgUrl = 'http://placehold.it/320x568';
      //},
      // destructiveButtonClicked: function(){
      //   console.log('Destructive Button Clicked.');
      // },
      buttonClicked: function(index) {
        if(0 == index){
          console.log("上传 button Clicked.");
          $scope.uploadImage();
        }
        if(1 == index){
          console.log("重拍 button Clicked.");
          $scope.takeImage();
        }
        return false;
      }
    });
    // For example's sake, hide the sheet after two seconds
    $timeout(function() {
      hideSheet();
    }, 2000);
  };

  $scope.uploadImage = function(){
    if($scope.myImgUrl == 'http://placehold.it/320x568'){
      return false;
    }
    var filePath = $scope.myImgUrl;
    var server = "http://192.168.1.2/AngularWebApp/FileUploadHandler.ashx";
    var options = {user: 'zhou', action: 'u'};

    $cordovaFileTransfer.upload(server, filePath, options, true)
    .then(function(result) {
      // Success!
      var successDialog = $ionicPopup.alert({
        title: '系统提示',
        template: '图片上传成功!'
      });
      successDialog.then(function(res) {

      });
    }, function(err) {
      // Error
      var errorDialog = $ionicPopup.alert({
        title: '系统提示',
        template: '图片上传失败，原因：' + err
      });
      errorDialog.then(function(res) {

      });
    }, function (progress) {
      // constant progress updates
    });
  };

})

.controller('TabsCtrl', function($scope, $state, $timeout, $ionicLoading) {
  console.log('TabsCtrl');

  $scope.tabsStyle = 'tabs-icon-top tabs-positive pane tabs-bottom tabs-standard';

  $scope.quitConfirm = function() {
    if(ionic.Platform.isAndroid()){
      ionic.Platform.exitApp();
      //navigator.app.exitApp();
    } else {
      $state.go('welcome');
    }
  };

})

.controller('AboutUsTabCtrl', function($scope, $state, $ionicPopup, $ionicTabsDelegate) {
  console.log('AboutUsTabCtrl');
})

.controller('ServiceTabCtrl', function($scope, $state, $ionicPopup, $ionicTabsDelegate) {
  console.log('ServiceTabCtrl');
});
