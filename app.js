

//Global Variables
var teamInfo = [];
// var leftImage = document.getElementsById('logo1');
// var rightImage = document.getElementsById('logo2');
var teamStats1 = document.getElementById('leftStats'); //list 1
var teamStats2 = document.getElementById('rightStats'); //list 2

//Constructor Function to populate team image and stats
function Team (teamName, teamRecord, ptsPerGame, ptsAllowedPerGame, avgYardsPerGame, avgYardsAllowedPerGame){
  this.teamName = teamName;
  this.teamRecord = teamRecord;
  this.ptsPerGame = ptsPerGame;
  this.ptsAllowedPerGame = ptsAllowedPerGame;
  this.avgYardsPerGame = avgYardsPerGame;
  this.avgyardsAllowedPerGame = avgYardsAllowedPerGame;

  teamInfo.push(this);
}

//Instantations to populate team images and stats
var fortyNine = new Team('Forty Nine', '13W, 3L', 29.9, 18.9, 331, 304.8);
var chief = new Team('Chief', '12W, 4L', 43.0, 20.2, 422.5, 402.0);
//var teamsArray = [fortyNine, chief];

function renderTeams(){
    //function to write info from constructor function to the HTML page
  document.getElementById('logo1').src = 'https://images.app.goo.gl/DEV4qKNWCA9kKYJKA';
  document.getElementById('logo2').src = 'https://images.app.goo.gl/DEV4qKNWCA9kKYJKA';
  var statsLI = document.createElement('ul');

//   for(var j = 0; j < teamsArray.length; j++){
//     console.log(teamsArray);
//   }
  for(var i = 0; i < teamInfo.length; i++){
    console.log(teamInfo);
    var teamStat = document.createElement('li');
    teamStat.textContent = teamsArray[j].teamInfo[i];
    console.log(teamStat);
  }
  statsLI.appendChild(teamStat);
  teamStats1.appendChild(statsLI);
}


// //Now we make a second constructor function to gather user input in a form, write the input to storage and then get the data from storage and populate the graph and table
// //Constructor Function for user input
// function UserVoting(userName, winner, mvp, score1, score2){
//   this.userName = userName;
//   this.winner = winner;
//   this.mvp = mvp;
//   this.score1 = score1;
//   this.score2 = score2;

//   UserVoting.data.push(this);

// }

// UserVoting.data = [];


// //Event handler to handle input from form
// function handleSubmit(event){
//   event.preventDevfault();


//   //get all values from the form
//   var data = event.target;
//   var userName = data.userName.value;
//   var winner = data.winner.value;
//   var mvp = data.mvp.value;
//   var score1 = data.score1.value;
//   var score2 = data.score2.value;

//   var fortyNineVote = 0;
//   var chiefVote = 0;

//   if(winner.value = fortyNine){
//     fortyNineVote++;
//   } else if (winner.value = chief){
//     chiefVote++;
//   } else
//     alert('Unknown input');

//   new UserVoting(userName, winner, mvp, score1, score2);

// }
renderTeams();

