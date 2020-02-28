// Werkend maken met FireFox
// Heeft net iets andere rules

function changeAppearance(event) {
	var attr = document.getElementById("attribute").value;
	var prop = document.getElementById("property").value;
	var valu = document.getElementById("value").value;

	console.log(prop);

	switch(prop) {
		case "background-color":
		 	document.getElementsByTagName(attribute)[0].style.backgroundColor = value;
		 	break;
		case "color":
			document.getElementsByTagName(attribute)[0].style.color = value;
			break;
		case "font-size":
			document.getElementsByTagName(attribute)[0].style.fontSize = value;
			break;
	}
}

var event = document.getElementById("value");
event.addEventListener("input", changeAppearance, false);