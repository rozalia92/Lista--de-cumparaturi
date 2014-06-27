/**
 * Created by Rozalia.Dontu on 6/26/2014.
 */

angular.module('lista',[])
    .controller('listCtrl',function($scope){

        $scope.shoppingList = [];

        $scope.checked = false;
        $scope.newItem = {
            pret: 0,
            cantitate: 0,
            nume: '',
            descriere: '',
            subtotal : function(pret, cantitate){
                return pret * cantitate;

            }
        };

        $scope.toggleBox = function () {
            $scope.checked = !$scope.checked;
        }


//        $scope.check = [{}];
        $scope.add =  function(){

            $scope.shoppingList.push($scope.newItem);
            $scope.newItem = {
                pret: 0,
                cantitate: 0,
                nume: '',
                descriere: ''
            };

            $scope.checked = !$scope.checked;


        };


    });
