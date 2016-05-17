"use strict";
$(document).ready(function() {
    

    let songObject = {};

   //adds ob
    function pushTracks(data) {
            // $.each(data, function(index, songObject){ 
            // // console.log("songObject", songObject);
            // songArray.push(songObject);
            // });
            // console.log("songArray", songArray);
            songObject = data;
            console.log("1stsongObject", songObject);
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
        console.log("songId",songId );
        let currentSong = songObject[songId];
        $("#starterDom").append(`<li> ${currentSong.artist}   |   ${currentSong.album}   |   ${currentSong.genre}<Button id = "${songId}" class="delete">Delete</Button></li>`)
      }; 
        // songObject.forEach(function(songObject) {
        // console.log("songObject", songObject);                          
        // };
    };    


      //add a song
    $('#addBtn').click(function() {
      var additions = {};
      additions.artist = $('#Artist').val(); 
      additions.album = $('#Album').val();
      additions.genre = $('#Song').val();
      // console.log("additions", additions);
      // songArray.push(additions);
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


    $('#starterDom').on("click", ".delete", function(event){
      console.log("event", $(this).attr("id"));
      let clickedElement = $(this).attr("id");
      deleteSongFromFirebase(clickedElement);
    });


    //delete song function to go back and delete the song from firebase
    function deleteSongFromFirebase(songObject) {
      console.log("songObject", songObject);
      $.ajax ({
        url: "https://musichistorysandy.firebaseio.com/songs/" + songObject + ".json",
        type: "DELETE"
      }).done(function() {
      ajaxAllSongs();
      });
    };
});

//commented out since using firebase
     // $("#moreButton").click(function() {
     //        $.ajax({
     //            url: "moreSongs.json",
     //            success: pushTracks
     //        });
     //        $("#moreButton").hide();
     //  });

     //Event listeners for the add user input button