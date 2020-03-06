// Event listener that loads the data on page load
window.addEventListener("load", LoadInfo, false);

// FUnction that takes the data given and writes it on the webpage
function LoadInfo() {
	// Course instance that contains all information
	var c = new Course("Gameprogrammeren","INFOB1GP", "Information and Computing Sciences", 7.5, 1, "D", new Staff(new Lecturer("Dr.", "Gameprogrammer", "1234"), new Assistent("Fabian", "van Maanen", "3456"), new Assistent("Yoran", "den Heijer", "5678"), new Assistent("Romeo", "Zeph", "7890")));
	CreateText("h2", "Course Information")
	CreateText("p", "Titel: " + c.title);
	CreateText("p", "Code: " + c.code);
	CreateText("p", "Departement: " + c.department);
	CreateText("p", "Credits: " + c.credits);
	CreateText("p", "Periode: " + c.period);
	CreateText("p", "Tijdslot: " + c.timeslot);
	CreateText("p", "Groepen en Docenten:");

	// List to fill the table
	var list = [
		["Vorm", "Groep", "Docent"],
		["Hoorcollege", "-", c.staff.lec.getFullName()],
		["Werkcollege", "Groep 1", c.staff.ass1.getFullName()],
		["Werkcollege", "Groep 2", c.staff.ass2.getFullName()],
		["Werkcollege", "Groep 3", c.staff.ass3.getFullName()]
	];
	CreateTable(list);
}

// Function that takes a tag and the text for it and creates a text node
function CreateText(tag, text) {
	var pos = document.getElementsByTagName("section")[0];
	var myLink = document.createElement(tag);
	var myText = document.createTextNode(text);
	myLink.appendChild(myText);
	pos.appendChild(myLink);
}

// Creates a table with the data in the list that is given
function CreateTable(list) {
	// Determine the position of the table
	var pos = document.getElementsByTagName("section")[0];
	// Create the actual table
	var tbl = document.createElement("table");
	tbl.setAttribute("class", "table__mobile");
	tbl.setAttribute("border", "1");
	// Create the body of the table
	var tbdy = document.createElement("tbody");

	// Fill the body with rows
	for(var i = 0; i < list.length; i++) {
		// Create a row
		var tr = document.createElement("tr");
		for(var j = 0; j < list[i].length; j++) {
			// If a row is the top row... create headers instead of normal cells
			if(i == 0){
				// Create a header cell
				var th = document.createElement("th");
				// Fill it with the text from the list
				th.appendChild(document.createTextNode(list[i][j]));
				tr.appendChild(th);
			}
			else {
				if(j == 2 && i != 0) {
					// Create a cell with a link
					var td = document.createElement("td");
					var link = document.createElement("a");
					link.setAttribute("href", "staff.html");
					link.appendChild(document.createTextNode(list[i][j]));
					td.appendChild(link);
					tr.appendChild(td);
				}
				else {
					// Create a cell without link
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

// Class that contains all information
class Course {
	constructor(title, code, department, credits, period, timeslot, staff) {
		this.title = title; 
		this.code = code;
		this.department = department;
		this.credits = credits; 
		this.period = period;
		this.timeslot = timeslot;
		this.staff = staff; 
	}
}

// Class that contains all staff information
class Staff {
	constructor(lecturer, assistent1, assistent2, assistent3) {
		this.lec = lecturer;
		this.ass1 = assistent1;
		this.ass2 = assistent2;
		this.ass3 = assistent3;
	}
}

// Super class of the lecturer and assistent classes
class StaffMember {
	constructor(firstName, lastName) {
		this.firstName = firstName || "unknown";
		this.lastName = lastName || "unknown";	
	}

	// Function that takes the first and last name and creates a full name
	getFullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

// Class that contains all information about a lecturer
class Lecturer extends StaffMember {
	constructor(firstName, lastName, lecID) {
		super(firstName, lastName);
		this.lecID = lecID || "unknown";	
	}
}

// Class that contains all information about an assistent
class Assistent extends StaffMember {
	constructor(firstName, lastName, stuID) {
		super(firstName, lastName);
		this.stuID = stuID || "unknown";	
	}
}