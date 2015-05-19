/**
 * Created by jonrowe on 12/05/15.
 */
angular.module('versus')
    .controller('DetailCtrl', function($scope,$state,$localstorage){

        $scope.$on('$ionicView.beforeEnter', function(){
            $scope.item = $localstorage.getObject($localstorage.getSelected());
        });

    });