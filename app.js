var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    $scope.images = ["images/1.jpg",
                     "images/2.jpg",
                     "images/3.jpg",
                     "images/4.jpg",
                     "images/5.jpg",
                     "images/6.jpg",
                    ]
    $scope.mainImageIndex = 0;



    $scope.imgNext = function() {
      $scope.images.push($scope.images[0]);
      $scope.images.shift();
    }

    $scope.imgPrev = function() {
      $scope.images.unshift($scope.images[$scope.images.length - 1]);
      $scope.images.pop();
    }

    $scope.changeMainImage = function(index) {
      $scope.mainImageIndex = index;
    }
});
