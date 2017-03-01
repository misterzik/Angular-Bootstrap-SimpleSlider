(function() {

    var app = angular.module("fWapp");

    var AboutController = function($scope, $routeParams, $http) {
         
        $http.get('https://api.digitalmedia.hhs.gov/api/v2/resources/media/mostPopularMedia.json')
        .then(function(data) {
            // angular.forEach(data, function(item) {
            //     if (item.sku == $routeParams.skuid)
                     // Results ".results" is added after data,
                     // To trim down some of unnecessary feed.
                     $scope.info = data;
            // });
        });
    };

    app.controller("AboutController", AboutController);

}());
