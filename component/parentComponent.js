var app=angular.module("myApp",[]);
app.component("personalComponent", {
	
	bindings: {
		studentId: "=",
		academicData:"="
	},

	templateUrl: "template/parentTemplate.html",	
	controller: ["myServicePersonal", function (myServicePersonal) {
		
		var self = this;
		myServicePersonal.getData().then(function (response) {
			self.studentPersonalData = response.studentPersonal;
			self.studentDetails=[];
			for( var x of self.studentPersonalData){
			for(var x1 of self.academicData){
			if(x.id == x1.id){
			x["rollno"] = x1.rollno;
			x["marks"] = x1.marks;
			self.studentDetails.push(x);
			console.log(self.studentDetails);
		}
	}
	
}

			// self.subject = "AngularJs";
		});
		
	}],
	
	controllerAs: "parentCtrl"

});