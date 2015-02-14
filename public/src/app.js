// external modules must be added as dependencies eg. ['ui.router']
var app = angular.module('flapperNews', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);


// Controller for Posts
app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
    $scope.posts = posts.posts;
    $scope.title = 'Flapper News';

    $scope.addPost = function(){
      var post = $scope.title;
      if(!$scope.title || $scope.title === '') { 
        alert('Please enter a title!'); 
        return; 
      } 
      $scope.posts.push({
        title: $scope.title, 
        link: $scope.link,
        upvotes: 0
      });
      $scope.title='';
      $scope.link='';           
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
      console.log('upvot4e')
    };
}]);


app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
    });
    $scope.post = posts.posts[$stateParams.id];
    $scope.addComment = function(){
      if($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };
}]);
