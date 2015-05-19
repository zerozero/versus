/**
 * Created by jonrowe on 12/05/15.
 */
angular.module('versus.utils')
    .factory('$localstorage', ['$window', function($window) {


        var selected = '';

        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            guid: function(){
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            },
            all:function(){
                var arr = [];
                for (var key in $window.localStorage)
                    arr.push({
                        key: key,
                        data: this.getObject(key)
                    });
                return arr;
            },
            setSelected: function(key){
                selected = key;
            },
            getSelected: function(){
                return selected;
            }
        }
    }]);