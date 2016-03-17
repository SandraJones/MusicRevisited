"use strict";
// var songs = [
// "Legs > by Z*ZTop on the album Eliminator", 
// "The Logical Song > by Supertr@amp on the album Breakfast in America",
// "Another Brick in the Wall > by Pink Floyd on the album The Wall",
// "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction",
// "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"
// ];
let expandedSongs = [];
let yourArray = [];	
let newSongsList = [];
let songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


songs.unshift("Rust Never Sleeps > by Neil Young on the album Rust Never Sleeps");

songs.push("Bite the Bullet > by Neil Young on the album American Stars and Bars");

 
for (let i=0; i<songs.length; i++) {  
  expandedSongs = songs[i].replace(/[!*@(]/g, '').replace(/>/g, '');  
}

//gather song input from  user
let createNewMusic = function(){
	console.log("this function works", createNewMusic);
	let songInput = document.getElementById("Song").value;
	let artistInput = document.getElementById("Artist").value;
	let albumInput = document.getElementById("Album").value;
  yourArray = [songInput, artistInput, albumInput];
  console.log(expandedSongs);

  console.log("yourArray", yourArray );
  songs.push(yourArray);
  console.log("songs", songs);
	// populateDOM(newSongsList);
}


// function populateDOM() {
// 	for (let i = 0; i < newSongsList.length; i++) {
// 	  //print this straight to the DOM
// 	  let person = people[i];
// 	  } 
// 	addClickEvent();  
// }


addBtn.addEventListener("click", createNewMusic);

//
// function buildCard(person) {
//   container.innerHTML += `<person class="card"><header>${person.title} ${person.name} </header><section><p class="bio">${person.bio}</p><img src="${person.image}"></section><footer>${person.lifespan.birth}-${person.lifespan.death}</footer></person>` 
// };