/**
 * Created by Rozalia.Dontu on 6/26/2014.
 */

angular.module('lista',[])
    .controller('listCtrl',function($scope){

        $scope.checked = false;
        $scope.newItem = {
            pret: 0,
            cantitate: 0,
            nume: '',
            descriere: ''
        };

        $scope.toggleBox = function () {
            $scope.checked = !$scope.checked;
        }

        $scope.subtotal = function(){
            return $scope.newItem.cantitate * $scope.newItem.pret;
        };


    });
