"use strict";
document.addEventListener("DOMContentLoaded",()=>{
	//disable the form elements at first
let form = document.querySelector("#customer");
let formElements = form.elements;
for (let i=0; i<formElements.length; i++){
	formElements[i].disabled = 1;//true
}
//click thbutton to ebalbe form elements
document.querySelector("#fill").addEventListener("click",()=>{
for (let i=0; i<formElements.length; i++){
	formElements[i].disabled = 0;// false
	}
});
});