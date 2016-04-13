"use strict";
let addButton = document.getElementById("addMusic")
let addView = document.getElementById("add-view");

  addButton.addEventListener("click", function(event) { 
    //console.log("this works too");	
  	event.preventDefault();
	  // homeView.classList.add("hidden");
	  listView.classList.remove("visible");
	  listView.classList.add("hidden");
	  addView.classList.remove("hidden");
	  addView.classList.add("visible");

});
