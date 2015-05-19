/**
 * Created by jonrowe on 12/05/15.
 */
angular.module('versus')
    .controller('HomeCtrl', function($scope,$state,$localstorage,$location){

        $scope.showDetail = function(key){
            $localstorage.setSelected(key);
            $state.go('detail');
        };

        //listen for the beforeEnter event dispatched by the ion-view
        $scope.$on('$ionicView.beforeEnter', function(){
            $scope.items = $localstorage.all();
        });
    });
