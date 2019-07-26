
app.service('myServicePersonal', function ($http) {

    function getData (){
     return $http.get("json/studData.json").then(function(response){
      console.log('inside response',response);
        return response.data;
       });
       
   }; 
   return{
      getData : getData
   }
 });