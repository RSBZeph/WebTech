const a = () =>{
	alert("This is an alert for the button")
}

const b = () =>{
	alert("This is an alert for the parent of the button")
}

document.getElementById("propChild").addEventListener("click", a, false);
document.getElementById("propParent").addEventListener("click", b, false);