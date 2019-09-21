app.controller('MainController', ['$scope', function($scope) {
  $scope.program = {
    series: "Sherlock",
    series_img: "https://s3.amazonaws.com/codecademy-content/projects/4/bolt-network-1/img/sherlock.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  };
  $scope.favorite = {
    series: "Battlestar Galactica",
    series_img: "https://en.battlestarwikiclone.org/w/images/6/62/Bsg-1-10.jpg",
    genre: "Sci-Fi drama",
    season: 1,
    episode: "The Hand of God",
    description: "The fleet is running out of tylium fuel and will soon not have enough to keep running from the Cylons, when they find an asteroid with several years worth of tylium ore... unfortunately, the Cylons have already built a mining base on it.",
    datetime: new Date(2005, 2, 11, 23, 00, 00, 00)
  };
}]);