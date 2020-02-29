window.addEventListener("load", LoadInfo, false);

function LoadInfo() {
	var c = new Course();
	CreateText("h2", "Course Information")
	CreateText("p", "Titel: " + c.title);
	CreateText("p", "Code: " + c.code);
	CreateText("p", "Departement: " + c.department);
	CreateText("p", "Credits: " + c.credits);
	CreateText("p", "Periode: " + c.period);
	CreateText("p", "Tijdslot: " + c.timeslot);
	CreateText("p", "Groepen en Docenten:");

	var list = [
		["Vorm", "Groep", "Docent"],
		["Hoorcollege", "-", c.staff.lec.getFullName()],
		["Werkcollege", "Groep 1", c.staff.ass1.getFullName()],
		["Werkcollege", "Groep 2", c.staff.ass2.getFullName()],
		["Werkcollege", "Groep 3", c.staff.ass3.getFullName()]
	];
	CreateTable(list);
}

function CreateText(tag, text) {
	var pos = document.getElementsByTagName("section")[0];
	var myLink = document.createElement(tag);
	var myText = document.createTextNode(text);
	myLink.appendChild(myText);
	pos.appendChild(myLink);
}

function CreateTable(list) {
	var pos = document.getElementsByTagName("section")[0];
	var tbl = document.createElement("table");
	tbl.setAttribute("class", "tablemobile");
	tbl.setAttribute("border", "1");
	var tbdy = document.createElement("tbody");

	for(var i = 0; i < list.length; i++) {
		var tr = document.createElement("tr");
		for(var j = 0; j < list[i].length; j++) {
			if(i == 0){
				var th = document.createElement("th");
				th.appendChild(document.createTextNode(list[i][j]));
				tr.appendChild(th);
			}
			else {
				if(j == 2 && i != 0) {
					var td = document.createElement("td");
					var link = document.createElement("a");
					link.setAttribute("href", "staff.html");
					link.appendChild(document.createTextNode(list[i][j]));
					td.appendChild(link);
					tr.appendChild(td);
				}
				else {
					var td = document.createElement("td");
					td.appendChild(document.createTextNode(list[i][j]));
					tr.appendChild(td);
				}
			}
		}
		tbdy.appendChild(tr);
	}

	tbl.appendChild(tbdy);
	pos.appendChild(tbl);
}

class Course {
	constructor() {
		this.title = "Gameprogrammeren";
		this.code = "INFOB1GP";
		this.department = "Information and Computing Sciences";
		this.credits = 7.5;
		this.period = 1;
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