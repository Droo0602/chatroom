var app = angular.module('chatroom');

app.service('parseService', function($http){
 
  this.getData = function(){
    return $http.get('https://api.parse.com/1/classes/chat?order=-createdAt')
      .success(function(data){
        console.log(data)
      })
      .error(function(data){
        console.error("error", data)
      })
  };

  this.postData = function(obj){
    $http.post('https://api.parse.com/1/classes/chat', obj)
      .error(function(data){
        console.log('Error', data)
      })
    };
  
});
