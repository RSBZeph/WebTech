function Click() {
	var text = document.getElementById("textID").value;
	var c = new Course(text);
	createPar(c.name);
	createPar(c.lecturer.getFullName());
	createPar(c.lecturer.lecID);
	createPar(c.assistent.getFullName());
	createPar(c.assistent.assID);
}

function createPar(text) {
	var pos = document.getElementsByTagName("section")[0];
	var myLink = document.createElement("p");
	var myText = document.createTextNode(text);
	myLink.appendChild(myText);
	pos.appendChild(myLink);
}

class Course {
	constructor(courseName) {
		this.name = courseName;
		this.lecturer = new Lecturer("John", "Doe", "1234567");
		this.assistent = new Assistent("Fabian", "van Maanen", "6214908");
	}
}

class StaffMember {
	constructor(firstName, lastName) {
		this.firstName = firstName || "unknown";
		this.lastName = lastName || "unknown";	
	}

	getFullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

class Lecturer extends StaffMember {
	constructor(firstName, lastName, lecID) {
		super(firstName, lastName);
		this.lecID = lecID || "unknown";	
	}
}

class Assistent extends StaffMember {
	constructor(firstName, lastName, assID) {
		super(firstName, lastName);
		this.assID = assID || "unknown";	
	}
}
