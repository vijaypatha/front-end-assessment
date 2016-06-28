app.controller("mainCtrl",function($scope,$stateParams, $state,mainService){
  console.log($stateParams);
  console.log($state);
  $scope.test = "vijay";
  $scope.getDataFromService = function(){
    mainService.getDataFromServer()
    .then(function(getDataFromResponse){
      console.log(getDataFromResponse);
      $scope.dataView = getDataFromResponse;
    });
  }
  $scope.getDataFromService();
  if ($state.params.id === 'shoes') {
      $scope.productData = productService.shoeData();
  } else if ($stateParams.id === 'socks') {
      $scope.productData = productService.sockData();
  }
});//main CTRL
