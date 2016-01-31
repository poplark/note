angular.module("noteApp")
    .controller("categoryController", ["$scope", "Service", "getAllCategories", function($scope, Service, getAllCategories) {
        $scope.allCategories = getAllCategories.data;

        $scope.raw = {};
        $scope.create = function(event) {
            var keyCode = event.keyCode;
            var title = $scope.raw.title;
            if(13 === keyCode) {
                if("string" === typeof title && title.length > 0) {
                    Service.addCategory(title).then(function(res) {
                        $scope.raw.title = '';
                        $scope.allCategories.entries.push(res.data);
                        $scope.allCategories.count += 1;
                    }, function(res) {
                        // todo
                        console.log("create category error.");
                    });
                }
                return;
            }
        }
    }]);