/**
 * Created by jonrowe on 12/05/15.
 */
angular.module('versus')
    .controller('NewCtrl', function($scope,$state,$localstorage,$location){
        $scope.$on('$ionicView.beforeEnter', function(){

            $scope.newGame = {
                name:'',
                player1:'',
                player2:''
            };
        });

        $scope.createGame = function(){
            var guid = $localstorage.guid();
            $localstorage.setObject(guid, $scope.newGame);
            $localstorage.setSelected(guid);
            $location.path('/detail');
        }
    });