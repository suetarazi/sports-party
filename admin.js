'use strict';

var teamLeft = 0;
var teamRight = 0;

//add event handler
function handleSubmit(event){
  event.preventDefault();
  console.log('Houston, we have a connection!');
  var scores=event.target;
  var homeTeamScore = scores.homeTeamScore.value;
  var visitingTeamScore = scores.visitingTeamScore.value;
  //console.log(scores);
  // console.log(homeTeamScore);
  // console.log(visitingTeamScore);


  //write to local storage by stringifying
  localStorage.setItem('homeTeamScore', homeTeamScore);
  localStorage.setItem('visitingTeamScore', visitingTeamScore);
  // rediect to index.html
}

//check if score is in storage
//parse from local storage
function getScoresFromStorage(){
  if(localStorage.length > 0){
    teamLeft = localStorage.getItem('homeTeamScore');
    teamRight = localStorage.getItem('visitingTeamScore');
    console.log('hello');
    console.log(teamLeft);
    console.log(teamRight);
  }

}

getScoresFromStorage();

//make a function to populate the home page.


//grab HTML elements for home and away scores from index.html
//make global and put in app.js

// var homeScore = document.getElementById('homeScore');

// homeScore.innerHTML(teamLeft);


//output to html page
var homeScore = document.getElementById('homeScore');
if (homeScore) {
  homeScore.innerHTML = teamLeft;
}
var awayScore = document.getElementById('awayScore');
if (awayScore){
  awayScore.innerHTML = teamRight;
}



//add event listener
var scoreUpdateForm = document.getElementById('scoreUpdateForm');
scoreUpdateForm.addEventListener('submit', handleSubmit);
