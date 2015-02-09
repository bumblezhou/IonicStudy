//inject angular file upload directives and service.
angular.module('myApp', ['angularFileUpload'])
.controller('UploadCtrl', function ($scope, $upload) {
    //$scope.$watch('files', function () {
    //    $scope.myFormData = {user: "zhou", action: "u"};
    //    $scope.upload = $upload.upload({
    //        url: 'FileUploadHandler.ashx',
    //        data: $scope.myFormData,
    //        file: $scope.files
    //    }).progress(function (evt) {
    //        
    //    }).success(function (data, status, headers, config) {
    //        console.log(data.Message);
    //    });
    //});
    $scope.myFormData = { user: "zhou", action: "u" };
    $scope.onFileSelect = function ($files) {
        //$files: an array of files selected, each file has name, size, and type.
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: 'FileUploadHandler.ashx',
                data: $scope.myFormData,
                file: file, // or list of files ($files) for html5 only
            }).progress(function (evt) {
                //console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function (data, status, headers, config) {
                //alert('Uploaded successfully ' + file.name);
                console.log(data.Message);
            }).error(function (err) {
                //alert('Error occured during upload');
            });
        }
    };
});