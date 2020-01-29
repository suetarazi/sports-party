'use strict';

//add event handler
function handleSubmit(event){
  event.preventDefault();
  console.log('Houston, we have a connection!');
  var scores=event.target;
  var homeTeamScore = scores.homeTeamScore.value;
  var visitingTeamScore = scores.visitingTeamScore.value;
  console.log(scores);
  // console.log(homeTeamScore);
  // console.log(visitingTeamScore);


  //write to local storage by stringifying
  localStorage.setItem('homeTeamScore', homeTeamScore);
  localStorage.setItem('visitingTeamScore', visitingTeamScore);

}

//check if score is in storage
//parse from local storage
function getScoresFromStorage(){
  if(localStorage.length > 0){
    var teamLeft = localStorage.getItem('homeTeamScore');
    var teamRight = localStorage.getItem('visitingTeamScore');
    console.log(teamLeft);
    console.log(teamRight);
  }

}

getScoresFromStorage();
//make a function to populate the home page.


//grab HTML elements for home and away scores from index.html
//make global and put in app.js
//   var homeScore = document.getElementById('homeScore');
//   // var awayScore = document.getElementById('awayScore');
//   //write inputted scores from admin.html to index.html
//   var infoP = document.createElement('p');
//   infoP.textContent(homeTeamScore);
//   console.log(infoP);
//   homeScore.appendChild(infoP);









//add event listener
var scoreUpdateForm = document.getElementById('scoreUpdateForm');
scoreUpdateForm.addEventListener('submit', handleSubmit);
