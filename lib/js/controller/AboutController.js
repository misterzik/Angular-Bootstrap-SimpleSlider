(function() {

    var app = angular.module("fWapp");

    var AboutController = function($scope, $routeParams, $http) {

        $scope.SliderIMG0 = "http://www.trbimg.com/img-56d9ab04/turbine/sc-free-fitness-health-0302-20160225";
        $scope.SliderIMG1 = "http://p11cdn4static.sharpschool.com/UserFiles/Servers/Server_63480/Image/District%20Public%20Facing/Departments/Food%20Services/Nutrition%20Resources/header_resources02.jpg";
        $scope.SliderIMG2 = "https://sbir.nih.gov/sites/sbir_sttr/themes/sbir/images/electronic_sub.jpg";
        $scope.SliderIMG3 = "http://contemporarypediatrics.modernmedicine.com/sites/default/files/imagecache/article_feature_image_main_640x380/article_images/392536/measles-vaccines-safe.png"

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
