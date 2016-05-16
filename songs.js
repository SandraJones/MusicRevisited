"use strict";
$(document).ready(function() {
    console.log( "ready!" );

    let songArray = [];

    // defaultView();
    function pushTracks(data) {
            console.log(data);
            $.each(data, function(index, songObject){ 
            console.log("songObject", songObject);
            songArray.push(songObject);
            });
            console.log("songArray", songArray);
            displayTracks();
        };

    //loop thru songArray
    $.ajax({
      url: "https://musichistorysandy.firebaseio.com/songs/.json",
        success: pushTracks
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

    function displayTracks() {
      $("#starterDom").html("");
        songArray.forEach(function(songObject) {
        console.log("songObject", songObject);
                          
        $("#starterDom").append(`<li> ${songObject.artist}   |   ${songObject.album}   |   ${songObject.genre}<Button class="delete">Delete</Button></li>`)
        });
      };

    $('#addBtn').click(function() {
      var additions = {};
      additions.artist = $('#Artist').val(); 
      additions.album = $('#Album').val();
      additions.genre = $('#Song').val();
      console.log("additions", additions);
      songArray.push(additions);
      $.ajax ({
        url: "https://musichistorysandy.firebaseio.com/songs/.json",
        type: "POST",
        data: JSON.stringify(additions)
      }).done(function(){
      displayTracks();
      $('#add-view').addClass("hidden");
      $('#list-view').removeClass("hidden");       
      });
    });

    $('#addMusic').click(function(){
      $('#add-view').removeClass("hidden");
      $('#list-view').addClass("hidden");
    });

    $('#viewMusic').click(function(){
      $('#list-view').removeClass("hidden");
      $('#add-view').addClass("hidden");
    })
    $('#starterDom').click(function(event){
      let clickedElement = event.target;
//what is it they clicked on... was the click on the ul, li, or delete and only want to act on the delete
      if ($(clickedElement).hasClass('delete')) {
         $(clickedElement).parent().remove();
      }
    });
 });