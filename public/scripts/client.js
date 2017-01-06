var myApp = angular.module('myApp', []);

myApp.controller('LaunchpadController', ['$scope', '$http', function($scope, $http) {
    console.log('NG Loaded');
    //getData();
    // $scope.getData = function () {
    //     $http({
    //         method: 'GET',
    //         url: '../../server/app.js'
    //     }).then(function(response) {
    //         console.log('Response from server: ', response);
    //     });
    // };

  $scope.postData = function () {
      var data = {
        assignmentName: $scope.assignmentName,
        studentName: $scope.studentName,
        score: $scope.score,
        dateTurnedIn: $scope.dateTurnedIn
      };
        $http({
            method: 'post',
            url: '/',
            data: data
        }).then(function(response) {
            console.log('Response from server: ', response);
        });
    };

}]);
