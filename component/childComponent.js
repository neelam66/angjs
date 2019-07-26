var app=angular.module("myApp");
app.component("academicComponent", {
	bindings: {
		studentId: "=",
	
		// studentData: "<" // Two Way Binding (for variable)
    },
    
	templateUrl: "template/childTemplate.html",
	controller: ["myServiceAcademic",function (myServiceAcademic) {
		var self=this;
		myServiceAcademic.getData().then(function(response){
			self.studentAcademicData=response.studentAcademic;
		});
    }],
    
	controllerAs: "academicCtrl"
});
