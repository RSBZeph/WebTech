window.addEventListener("load", LoadInfo, false);

function LoadInfo() {
	var c = new Course();
	CreatePar("Title", c.title);
	CreatePar("Code", c.code);
}

function CreatePar(subject, text) {
	var pos = document.getElementsByTagName("section")[0];
	var myLink = document.createElement("p");
	var myText = document.createTextNode(subject + ":\t" + text);
	myLink.appendChild(myText);
	pos.appendChild(myLink);
}

class Course {
	constructor() {
		this.title = "Gameprogrammeren";
		this.code = "INFOB1GP";
		this.department = "Information and Computing Sciences";
		this.credits = 7.5;
		this.periode = 1;
		this.timeslot = "D";
		this.staff = new Staff();
	}
}

class Staff {
	constructor() {
		this.lec = new Lecturer("Dr.", "Gameprogrammer", "1234");
		this.ass1 = new Assistent("Fabian", "van Maanen", "3456");
		this.ass2 = new Assistent("Yoran", "den Heijer", "5678");
		this.ass3 = new Assistent("Romeo", "Zeph", "7890");
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
	constructor(firstName, lastName, stuID) {
		super(firstName, lastName);
		this.stuID = stuID || "unknown";	
	}
}
