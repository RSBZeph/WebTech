document.getElementById("dropMenu").addEventListener("click", findDropDown, false);

function findDropDown() {
	var pos = document.getElementsByTagName("div")[2];
	var tar = document.getElementById("dropMenuDiv");
	if(pos.contains(tar)) {
		tar.parentNode.removeChild(tar);
	} 
	else {
		showMenu();
	}
}

function showMenu() {
	var pos = document.getElementsByTagName("div")[2];
	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", "dropMenuDiv");

	var list = ["body", "header", "aside", "section", "footer"];
	var list2 = ["All", "Header", "Menu", "Content", "Footer"];
	var elem = createSelect("attribute", list, list2);
	newDiv.appendChild(elem);

	var list = ["background-color", "color", "font-size"];
	var list2 = ["Background Color", "Text Color", "Text Size"];
	var elem = createSelect("property", list, list2);
	newDiv.appendChild(elem);

	var list1 = ["type", "id", "placeholder"];
	var list2 = ["text", "value", "value"];
	var elem = createInput(list1, list2);
	newDiv.appendChild(elem);

	pos.appendChild(newDiv);
	document.getElementById("value").addEventListener("input", changeAppearance, false);	
}

function createSelect(name, list, list2) {
	var elem = document.createElement("select");
	elem.setAttribute("id", name);
	for(var i = 0; i < list.length; i++) {
		var opt = createOption(list[i], list2[i]);
		elem.appendChild(opt);
	}
	return elem;
}

function createOption(value, name) {
	var option = document.createElement("option");
	option.setAttribute("value", value);
	option.appendChild(document.createTextNode(name));
	return option;
}

function createInput(list1, list2) {
	var input = document.createElement("input");
	for(var i = 0; i < list1.length; i++) {
		input.setAttribute(list1[i], list2[i]);
	}
	return input;
}

function changeAppearance(event) {
	var attribute = document.getElementById("attribute").value;
	var property = document.getElementById("property").value;
	var value = document.getElementById("value").value;

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