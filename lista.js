/**
 * Created by Rozalia.Dontu on 6/26/2014.
 */

angular.module('lista',[])
    .controller('listCtrl',function($scope){

        $scope.shoppingList = [];
        $scope.checked = false;
        $scope.editField =false;
        $scope.currentElem = false;
        $scope.newItem = {
            pret: 0,
            cantitate: 0,
            nume: '',
            descriere: '',
            cumparat: false,
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
                descriere: '',
                subtotal : function(pret, cantitate){
                    return pret * cantitate;

                }
            };

            $scope.checked = !$scope.checked;
        };

        $scope.checkedList = function(){
                if($scope.newItem.cumparat){
                }
            }
// partea a doua

        $scope.edit = function(){
            $scope.editField = !$scope.editField;
             }

        $scope.remove = function (item) {
            for (var i = 0; i < $scope.shoppingList.length; i++){
                if( item.nume == $scope.shoppingList[i].nume ) {
                    $scope.shoppingList.splice(i, 1);
                    break;
                }
            }
        }

        $scope.deleteCumparat = function(){
            var old = $scope.shoppingList;
            $scope.shoppingList = [];
            angular.forEach(old,function(item){
                if(!item.cumparat)
                    $scope.shoppingList.push(item);
            })
        }

        $scope.total = function () {
            var tot = 0;
            var oldV = $scope.shoppingList;
            angular.forEach(oldV,function(item){
                tot = tot + item.subtotal(item.pret,item.cantitate);
            })
            return tot;
        }



    });
