app.service("mainService",function($http){ //,$q
  this.getDataFromServer = function(parameterfromcontroller){
    var baseUrl = "https://dev-assessment.firebaseio.com/products.json";
    return $http.get(baseUrl)
    .then(function(response){
      console.log(response);
      return response.data;
    })
  }

});//mainService
