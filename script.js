var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var removeBtn = document.getElementsByClassName("removeBtn");
var clear = document.getElementsByClassName("clear")[0];


// Clear all list
clear.onclick = function(event){
	while(ul.firstChild){
		ul.removeChild(ul.firstChild);
	}
}
// Clear all list: un-sexy solution
// clear.addEventListener("click", function(){
// 	ul.innerHTML="";
// })


//click on a list item and it strikethroughs them
// https://www.w3schools.com/jsref/tryit.asp?filename=try_dom_event_target
ul.onclick = function(event){
	if(event.target.nodeName === "LI"){
		event.target.classList.toggle("done");
	}

}


//click on trash button to remove (SHIT TOOK ME 3 DAYS TO FIGURE OUT)
ul.addEventListener("click", function(){
	if (event.target.nodeName === "BUTTON"){
		event.target.parentNode.remove();
	}
})


// Creates new list and button
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var button = document.createElement("button");
	button.innerHTML = "trash";
	li.appendChild(button);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
