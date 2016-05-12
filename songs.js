"use strict";
$(document).ready(function() {
    console.log( "ready!" );


$.ajax({
  url: "songs.json",
  success: loadFunction
});

$("#addMusic").click(function(){
  $("#target").click();
});


$loadFunction = function(){
  
}



// let expandedSongs = [];
// let yourArray = [];  
// let newSongsList = [];
// let songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.unshift("Rust Never Sleeps > by Neil Young on the album Rust Never Sleeps");
// songs.push("Bite the Bullet > by Neil Young on the album American Stars and Bars");
 
// for (let i=0; i<songs.length; i++) {  
//   expandedSongs = songs[i].replace(/[!*@(]/g, '').replace(/>/g, '');  
// }
//gather song input from  user
let createNewMusic = function(){
  // console.log("this function works", createNewMusic);
  let songInput = document.getElementById("Song").value;
  let artistInput = document.getElementById("Artist").value;
  let albumInput = document.getElementById("Album").value;
  yourArray = [songInput, artistInput, albumInput];
  let newSongString = toString(yourArray);
  songs.push(newSongString);
  console.log("songs",songs);
  populateDOM();
}
function toString(arrayToConvert) {
  console.log("arrayToConvert", arrayToConvert);
  let songString = arrayToConvert[0] + " ";
  songString += arrayToConvert[1] + " ";
  songString += arrayToConvert[2];
  return songString;
}

//convert to jquery


addBtn.addEventListener("click", createNewMusic); 
// populateDOM(newSongsList);
function populateDOM() {
  for (let i = 0; i < songs.length; i++) {
    let songs = songs[i];
    currentSongs.innerHTML += songs[i]; 
    console.log("songs[i]", songs[i]);  
    }
};
populateDOM(); 
createNewMusic(songs);    
addClickEvent();
});
