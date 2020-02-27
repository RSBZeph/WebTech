// Werkend maken met FireFox
// Heeft net iets andere rules

function changeAppearance(attr, prop, valu) {
	var design = document.getElementById("design").sheet;

	if(design.rules[0].selectorText == ".appearance") {
		design.removeRule(0);
	}

	design.insertRule('.appearance {' + prop + ': ' + valu + ';}', 0);

	var elem = document.getElementsByTagName(attr)[0];
	elem.classList.toggle("appearance");
}