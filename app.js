

//Global Variables
var teamInfo = [];


var tableBody = document.getElementById('userResultsTable');
// var leftImage = document.getElementsById('logo1');
// var rightImage = document.getElementsById('logo2');
// var teamStats1 = document.getElementById('leftStats'); //list 1
// var teamStats2 = document.getElementById('rightStats'); //list 2

// //Constructor Function to populate team image and stats
// function Team (teamName, teamRecord, ptsPerGame, ptsAllowedPerGame, avgYardsPerGame, avgYardsAllowedPerGame){
//   this.teamName = teamName;
//   this.teamRecord = teamRecord;
//   this.ptsPerGame = ptsPerGame;
//   this.ptsAllowedPerGame = ptsAllowedPerGame;
//   this.avgYardsPerGame = avgYardsPerGame;
//   this.avgyardsAllowedPerGame = avgYardsAllowedPerGame;

//   teamInfo.push(this);
// }


//Instantations to populate team images and stats
// var fortyNine = new Team('Forty Nine', '13W, 3L', 29.9, 18.9, 331, 304.8);
// var chief = new Team('Chief', '12W, 4L', 43.0, 20.2, 422.5, 402.0);
//var teamsArray = [fortyNine, chief];

// **** Commented out for hard coding this information into the forward facing site. - Brandon ****
// function renderTeams(){
//     //function to write info from constructor function to the HTML page
//   document.getElementById('logo1').src = 'https://images.app.goo.gl/DEV4qKNWCA9kKYJKA';
//   document.getElementById('logo2').src = 'https://images.app.goo.gl/DEV4qKNWCA9kKYJKA';
//   var statsLI = document.createElement('ul');

//   for(var j = 0; j < teamsArray.length; j++){
//     console.log(teamsArray);
//   }


//   for(var i = 0; i < teamInfo.length; i++){
//     console.log(teamInfo);
//     var teamStat = document.createElement('li');
//     teamStat.textContent = teamsArray[j].teamInfo[i];
//     console.log(teamStat);
//   }
//   statsLI.appendChild(teamStat);
//   teamStats1.appendChild(statsLI);
// }


// //Instantations to populate team images and stats
// var fortyNine = new Team('Forty Nine', '13W, 3L', 29.9, 18.9, 331, 304.8);
// var chief = new Team('Chief', '12W, 4L', 43.0, 20.2, 422.5, 402.0);
// this.ptsPerGame =
// //var teamsArray = [fortyNine, chief];

// function renderTeams(){
//   //function to write info from constructor function to the HTML page
//   document.getElementById('logo1').src = 'https://images.app.goo.gl/DEV4qKNWCA9kKYJKA';
//   document.getElementById('logo2').src = 'https://images.app.goo.gl/DEV4qKNWCA9kKYJKA';
//   var statsLI = document.createElement('ul');

//   //   for(var j = 0; j < teamsArray.length; j++){
//   //     console.log(teamsArray);
//   //   }
//   for(var i = 0; i < teamInfo.length; i++){
//     console.log(teamInfo);
//     var teamStat = document.createElement('li');
//     teamStat.textContent = teamInfo[i].
//     //teamStat.textContent = teamsArray[j].teamInfo[i];
//       console.log(teamStat);
//   }
//   statsLI.appendChild(teamStat);
//   teamStats1.appendChild(statsLI);
// };

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
// renderTeams();


//******************************************************************************************************
// Constructor Funciton for our Form and its DATA
var newGuestObject = [];
var guestInput = ['Winner', 'MVP', '49s Score', 'Chefs Score'];

function Guest(name, winner, mvp, teamLeftScoreGuess, teamRightScoreGuess) {
  this.name = name;
  this.winner = winner;
  this.mvp = mvp;
  this.teamLeftScoreGuess = teamLeftScoreGuess;
  this.teamRightScoreGuess = teamRightScoreGuess;


}
// Render Header Row for Table, populated with column headings
function renderHeader() {
  var headerRow = document.createElement('tr');
  var guestName = document.createElement('th');
  guestName.textContent = 'Name';
  headerRow.appendChild(guestName);
  tableBody.appendChild(headerRow);

  for(var i = 0; i < guestInput.length; i++){
    var results = document.createElement('th');

    results.textContent = guestInput[i];
    headerRow.appendChild(results);
  }
}

Guest.prototype.body = function(){

  var bodyRow = document.createElement('tr');
  tableBody.appendChild(bodyRow);

  var guestName = document.createElement('td');
  guestName.textContent = this.name;
  console.log('NaME', this.name);
  bodyRow.appendChild(guestName);

  for (var i = 0; i < guestInput.length; i++) {
    var guestSelections = document.createElement('td');
    if (i === 0) {
      guestSelections.textContent = this.winner;
    } else if (i === 1){
      guestSelections.textContent = this.mvp;
    } else if (i === 2) {
      guestSelections.textContent = this.teamLeftScoreGuess;
    } else if (i === 3) {
      guestSelections.textContent = this.teamRightScoreGuess;
    }

    // `Thins the winner will be ${Guest.testing[i].winner}, and the MVP will be${Guest.testing[i].mvp} and the score will be ${Guest.testing[i].value} to ${Guest.testing[i].value}`;
    // console.log('hello from body loop',Guest.testing[i])

    bodyRow.appendChild(guestSelections);
  }

};

function render() {
  tableBody.innerHTML = null;
  renderHeader();
  // for (var i = 0; i < Guest.testing.length; i++){

  //   console.log('Hello from render land');
  //   Guest.testing[i].body();
  // }
  
}
render();


// Event Listener
var form = document.getElementById('votingForm');

form.addEventListener('submit', handleSubmit);
Guest.testing = [];

function handleSubmit(event){
  event.preventDefault();
  
  var testing = event.target;
  
  var name = testing.name.value;
  var winner = testing.winner.value;
  var mvp = testing.mvp.value;
  var tlsg = parseInt(testing.teamLeftScoreGuess.value);
  var trsg = parseInt(testing.teamRightScoreGuess.value);
  
  var newGuest = new Guest(name, winner, mvp, tlsg, trsg);
  console.log(newGuest);
  Guest.testing.push(newGuest);
  // newGuestObject.push(newGuest);
  render();
  for (var i = 0; i < Guest.testing.length; i++) {
    console.log('render for ', Guest.testing[i].name);
    Guest.testing[i].body();
  }
  graphData();
  renderChart();
}
console.log('is this running?');
console.log('I am a new Guest', newGuestObject);


// var button = document.getElementById('voteButton');
// button.addEventListener('submit'); // need to add chart/graph for second argument in order to work properly.
// console.log(button);

// // renderTeams();
// console.log(handleSubmit);



//Attempting rebuild of first contstructor with object inside of constructor to be built

// var teamArray = [];
// var fortyNineStats = {
//   wins: 13
//   ,losses: 3
//   ,avgPointsPerGame: 29.9 //30 hard code
//   ,avgPointsAllowed: 18.9 //19 hard code
//   ,avgYardsPerGame: 331
//   ,avgYardsAllowed: 304.8, //305 hard code
// };
// var chiefStats = {
//   wins: 12,
//   losses: 4
//   ,avgPointsPerGame: 43
//   ,avgPointsAllowed: 20.2 //20 hard code
//   ,avgYardsPerGame: 422.5 //423 hard code
//   ,avgYardsAllowed: 402,
// };

// function TeamBuild (name, obj){
//   this.name = name;
//   this.statWins = obj.wins;
//   this.statLosses = obj.losses;
//   this.statAvgPPG = obj.avgPointsPerGame;
//   this.statAvgPA = obj.avgPointsAllowed;
//   this.statAvgYPG = obj.avgYardsPerGame;
//   this.statAvgYA = obj.avgYardsAllowed;

//   teamArray.push(this);

// }

// //new instances of TeamBuild
// new TeamBuild ('Forty Nine', fortyNineStats);
// new TeamBuild ('Chief', chiefStats);

// //testing values of all objects in the array
// console.log('Forty Nine', fortyNineStats);
// console.log('Chief', chiefStats);

// //looping through the array
// for(var i = 0; i < teamArray.length; i++);{
//   console.log(teamArray[i].statWins, teamArray[i].statLosses);
// }












////Winner Poll Graph//////

var sfWins = 0;
var kcWins = 0;

function graphData() {
  sfWins = 0;
  kcWins = 0;
  for(var i = 0; i<Guest.testing.length; i++){
    if (Guest.testing[i].winner === 'Forty Nines'){
      sfWins++;}
    else if (Guest.testing[i].winner === 'Chefs'){
      kcWins++;}
    console.log('sf', sfWins, 'kc', kcWins);
  }
}


function renderChart(){
  var labelData = ['San Francisco', 'Kansas City'];
  var pollData = [sfWins, kcWins];
  console.log('ld', labelData);
  console.log('pd', pollData);



  var ctx = document.getElementById('pollChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelData,
      datasets: [{
        label: 'Team',
        data: pollData,
        // backgroundColor: ['rgba(232, 49, 23, 0.2)','rgba(255, 99, 132, 0.2)']
        backgroundColor: ['red', 'yellow']
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

