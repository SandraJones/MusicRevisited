"use strict";
$(document).ready(function() {
    console.log( "ready!" );

    let songArray = [];

    // defaultView();
    function pushTracks(data) {
            // console.log(data);
            data.songs.forEach(function(index, songObject){ 
            songArray.push(data.songs[songObject]);
            });
            // console.log("songArray", songArray);
            displayTracks();
        };

    //loop thru songArray
    $.ajax({
      url: "songs.json",
        success: pushTracks
      });

     $("#moreButton").click(function() {
            $.ajax({
                url: "moreSongs.json",
                success: pushTracks
            });
            $("#moreButton").hide();
      });

     //Event listeners for the add user input button

    function displayTracks() {
      $("#starterDom").html("");
        songArray.forEach(function(songObject) {
        console.log("songObject", songObject);
                          
        $("#starterDom").append(`<li> ${songObject.artist}   |   ${songObject.album}   |   ${songObject.genre}</li>`)
        });
      };

    $('#addBtn').click(function() {
      var additions = {};
      additions.artist = $('#Artist').val(); 
      additions.album = $('#Album').val();
      additions.genre = $('#Song').val();
      console.log("additions", additions);
      songArray.push(additions);
      displayTracks();
      $('#add-view').addClass("hidden");
      $('#list-view').removeClass("hidden");
    });

    $('#addMusic').click(function(){
      $('#add-view').removeClass("hidden");
      $('#list-view').addClass("hidden");

    });

    $('#viewMusic').click(function(){
      $('#list-view').removeClass("hidden");
      $('#add-view').addClass("hidden");
    })




 });