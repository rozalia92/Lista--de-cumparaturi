/**
 * Created by Rozalia.Dontu on 6/26/2014.
 */

angular.module('lista',[])
    .controller('listCtrl',function($scope){

        $scope.shoppingList = [];
        $scope.checked = false;
        $scope.editField =false;
        $scope.currentElem = false;
        $scope.maiMic = false;
        $scope.newItem = {
            pret: 0,
            cantitate: 0,
            nume: '',
            descriere: '',
            cumparat: false,
            subtotal : function(pret, cantitate){
                return pret * cantitate;
            },
  /*          maiMicCa0 : function(){
                if( cantitate < 0 || pret < 0 ){
                    $scope.maiMic = !$scope.maiMic;
            }
            */

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
            $scope.item.nume = $scope.newItem.nume;
            $scope.item.descriere = $scope.newItem.descriere;
            $scope.item.cantitate = $scope.newItem.cantitate;
            $scope.item.pret = $scope.newItem.pret;
             }

        $scope.save = function(){
            $scope.editField = false;
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


        $scope.myfocus = function(){
           if( $scope.newItem.cantitate == 0 )
                $scope.newItem.cantitate = '';

        }


        $scope.myfocus1 = function(){
           if( $scope.newItem.pret == 0 )
                 $scope.newItem.pret = '';
        }


        $scope.myblur = function(){

            if( $scope.newItem.cantitate == "" )
                $scope.newItem.cantitate = 0;

        }


        $scope.myblur1 =  function(){
            if( $scope.newItem.pret == "" )
                 $scope.newItem.pret = 0;
        }


     /*   $scope.MaiMicCa0 = function(){
            if( $scope.newItem.cantitate < 0 || $scope.newItem.pret < 0 ){
                message.alert("ai adaugat nr mai mic ca 0!");
                $scope.MaiMic = !$scope.MaiMic;
            }
        }
*/




    });
