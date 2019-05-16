var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButtons = document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.classList.add("delete");
	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";
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

function isTargetElement(e, element){
	if(e.target && e.target.matches(element)){
		return true;
	}
	return false;
}

function toggleDoneClass(e){
	if(isTargetElement(e, "li")){
		e.target.classList.toggle("done");
	}
}

function deleteList(e){
	if(isTargetElement(e, "button.delete")){
		e.target.parentElement.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDoneClass);

ul.addEventListener("click", deleteList);