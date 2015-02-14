app.factory('posts', [function(){
  var posts = 
    { posts: [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 13},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4},
      {title: 'post 6', upvotes: 14},
    ]};
  return posts;
}]);