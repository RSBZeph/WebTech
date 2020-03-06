// Create an event listener that activates the findDropMeny function when clicked on
document.getElementById("dropMenu").addEventListener("click", findDropDown, false);

// Function that checks whether an div with the select inputs already exists or not
// If not... make one... else... remove it
// This makes the div toggle when clicked on
function findDropDown() {
	// Position of the new div
	var pos = document.getElementsByTagName("div")[1];
	var tar = document.getElementById("dropMenuDiv");
	if(pos.contains(tar)) {
		tar.parentNode.removeChild(tar);
	} 
	else {
		showMenu();
	}
}

// Function that creates the new div containing the select inputs
function showMenu() {
	// Determine position for the new div
	var pos = document.getElementsByTagName("div")[1];
	// Create new div
	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", "dropMenuDiv");

	// Options for the first select...
	var list = ["body", "header", "aside", "section", "footer"];
	// ... and their names
	var list2 = ["All", "Header", "Menu", "Content", "Footer"];
	// Create new select input
	var elem = createSelect("attribute", list, list2);
	// Add it to the new div
	newDiv.appendChild(elem);

	// Same as above but now with properties of those options
	var list = ["background-color", "color", "font-size"];
	var list2 = ["Background Color", "Text Color", "Text Size"];
	var elem = createSelect("property", list, list2);
	newDiv.appendChild(elem);

	// Create an input for a user to write values in
	var list1 = ["type", "id", "placeholder"];
	var list2 = ["text", "value", "value"];
	var elem = createInput(list1, list2);
	newDiv.appendChild(elem);
	// Give the input an event listener to change the appearance based on the selected input
	// Appearance changes when a new input is given
	document.getElementById("value").addEventListener("input", changeAppearance, false);	

	// Add the new div to the target position
	pos.appendChild(newDiv);
}

// Function to create a new select tag
function createSelect(name, list, list2) {
	var elem = document.createElement("select");
	elem.setAttribute("id", name);
	// Give the select tag a few options for the user to choose from
	for(var i = 0; i < list.length; i++) {
		var opt = createOption(list[i], list2[i]);
		elem.appendChild(opt);
	}
	return elem;
}

// Function that creates a new option tag
function createOption(value, name) {
	var option = document.createElement("option");
	option.setAttribute("value", value);
	// Give the option a name to be shown on the screen
	option.appendChild(document.createTextNode(name));
	return option;
}

// Function that creates a new input tag
function createInput(list1, list2) {
	var input = document.createElement("input");
	// Give the input tag a few attributes
	for(var i = 0; i < list1.length; i++) {
		input.setAttribute(list1[i], list2[i]);
	}
	return input;
}

// Function that actually changes the appearance of the page
function changeAppearance(event) {
	// Get the three inputs given by the user in the newly created div
	// Part of the page
	var attribute = document.getElementById("attribute").value;
	// property of that part
	var property = document.getElementById("property").value;
	// Its new value
	var value = document.getElementById("value").value;

	// Code that changes the style of the selected attribute with the property and the new value
	switch(property) {
		case "background-color":
		 	document.getElementsByTagName(attribute)[0].style.backgroundColor = value;
		 	break;
		case "color":
			document.getElementsByTagName(attribute)[0].style.color = value;
			break;
		case "font-size":
			document.getElementsByTagName(attribute)[0].style.fontSize = value + "px";
			break;
	}
}