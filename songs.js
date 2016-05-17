"use strict";
$(document).ready(function() {
    let songObject = {};

   //adds objects from load into songObject
    function pushTracks(data) {
      songObject = data;
      displayTracks();
    };


    //load songs from firebase database
    function ajaxAllSongs() {
    $.ajax({
      url: "https://musichistorysandy.firebaseio.com/songs/.json",
        success: pushTracks
      });
    };
    ajaxAllSongs();


    //put the songs onto the DOM
    function displayTracks() {
      $("#starterDom").html("");
      for (let songId in songObject){  
        let currentSong = songObject[songId];
        $("#starterDom").append(`<li> ${currentSong.artist}   |   ${currentSong.album}   |   ${currentSong.genre}<Button id = "${songId}" class="delete">Delete</Button></li>`)
      }; 
    };    


      //add a song
    $('#addBtn').click(function() {
      var additions = {};
      additions.artist = $('#Artist').val(); 
      additions.album = $('#Album').val();
      additions.genre = $('#Song').val();
      $.ajax ({
        url: "https://musichistorysandy.firebaseio.com/songs/.json",
        type: "POST",
        data: JSON.stringify(additions)
      }).done(function(){
      $('#add-view').addClass("hidden");
      $('#list-view').removeClass("hidden");       
      ajaxAllSongs();
      });
    });


     //hiding the addMusic box
    $('#addMusic').click(function(){
      $('#add-view').removeClass("hidden");
      $('#list-view').addClass("hidden");
    });

     //hiding the listMusic boxes
    $('#viewMusic').click(function(){
      $('#list-view').removeClass("hidden");
      $('#add-view').addClass("hidden");
    });

     //listener for the delete button that is located on each song
    $('#starterDom').on("click", ".delete", function(event){
      let clickedElement = $(this).attr("id");
      deleteSongFromFirebase(clickedElement);
    });


    //delete song function to go back and delete the song from firebase
    function deleteSongFromFirebase(songObject) {
      $.ajax ({
        url: "https://musichistorysandy.firebaseio.com/songs/" + songObject + ".json",
        type: "DELETE"
      }).done(function() {
      ajaxAllSongs();
      });
    };
});