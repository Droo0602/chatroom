var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){
  $scope.messages = [];

  $scope.getParseData = function(){
    parseService.getData().then(function(response){
      console.log(response)
      $scope.messages = response.data.results
    })
  }

  $scope.postData = function(){
      console.log("post data")
      var obj = {
        text:$scope.message
      }
      parseService.postData(obj).then(function(){
        $scope.getParseData();
      });
    }

$scope.getParseData();

   setInterval(function(){
     $scope.getParseData();
   }, 1500)
})
