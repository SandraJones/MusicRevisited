"use strict";
let viewButton = document.getElementById("viewMusic");
let listView = document.getElementById("list-view")
	viewButton.addEventListener("click", function(event) {
		//console.log("this works");
	  event.preventDefault();
	  // homeView.classList.add("hidden");
	  addView.classList.add("hidden");
	  listView.classList.add("visible");  
	  addView.classList.remove("visible");
	  listView.classList.remove("hidden");
});
