let myImage = document.querySelector("img");

myImage.onclick = function(){
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/kitahara.png"){
		myImage.setAttribute("src", "images/kitahara alt.png");
	} else{
		myImage.setAttribute("src", "images/kitahara.png");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
	let myName = prompt("Please enter your name");
	if(!myName){
	setUserName();
}else{
	localStorage.setItem("name", myName);
	myHeading.textContent = `Kitahara Nozomi welcomes you, ${myName}.`;
	}
}

if (!localStorage.getItem("name")){
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.textContent = `Kitahara Nozomi welcomes you, ${storedName}.`;
}

myButton.onclick = () =>{
	setUserName();
};