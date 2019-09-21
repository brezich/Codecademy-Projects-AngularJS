app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'https://s3.amazonaws.com/codecademy-content/projects/4/feedster/img/cbj.svg'
      },
      comment: {
        img: 'https://s3.amazonaws.com/codecademy-content/projects/4/feedster/img/dog.jpg',
        text: 'How much for that dogg in the window?'
      }
    },
    {
      author: {
        name: 'Matthew Healy',
        avatar: 'https://s3.amazonaws.com/codecademy-content/projects/4/feedster/img/mh.svg'
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      }
    }
  ]
}]);