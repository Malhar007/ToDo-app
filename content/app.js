
var myApp = angular.module('myApp',['ngRoute','ngAnimate']) ;




myApp.controller('Controller', ['$scope' , function ($scope) {

$scope.removen= function (i) {
  var removen = $scope.ninjas.indexOf(i);
  $scope.ninjas.splice(removen, 1);
};



$scope.additem = function () {
  $scope.ninjas.push({
    name :$scope.newitem.name,
    belt :$scope.newitem.belt,
    rate :parseFloat($scope.newitem.rate)
  });
  $scope.newitem.name = "";
    $scope.newitem.belt = "";
  $scope.newitem.rate = "";

};


  $scope.message = "yo guys";
  $scope.ninjas = [

{
  name : "Exercise",
  belt :"blue",
  rate : 1,
  thumb:"" ,


},
{
  name : "Breakfast",
  belt : "orange",
  rate : .5,
  thumb :"",

},

{
  name : 'Work',
  belt :"black",
  rate : 2,
  thumb :""

},

{
  name : 'study',
  belt :"yellow",
  rate :2,
  thumb :"",

},
];

}]);
