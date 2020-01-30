//Global Variables
var teamInfo = [];

var tableBody = document.getElementById('userResultsTable');

// Constructor Funciton for our Form and its DATA
var newGuestObject = [];
var guestInput = ['Winner', 'MVP', '49s Score', 'Chefs Score'];

// var fromLocal = [];

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
// <<<<<<< appJS
  tableBody.appendChild(headerRow);  
  
  for(var i = 0; i < guestInput.length; i++){
    var results = document.createElement('th');    
    
// =======
//   tableBody.appendChild(headerRow);

//   for(var i = 0; i < guestInput.length; i++){
//     var results = document.createElement('th');

// >>>>>>> staging
    results.textContent = guestInput[i];
    headerRow.appendChild(results);
  }
}

Guest.prototype.body = function(){
  var bodyRow = document.createElement('tr');
  tableBody.appendChild(bodyRow);

  var guestName = document.createElement('td');
  console.log(this.name);
  guestName.textContent = this.name;
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
    
    bodyRow.appendChild(guestSelections);      
  }

};

function render() {
  tableBody.innerHTML = null;
  renderHeader();
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
  Guest.testing.push(newGuest);
  // newGuestObject.push(newGuest);
  render();
  
  //// Works here but also does not updat LS...because LS
  for (var i = 0; i < Guest.testing.length; i++) {
    Guest.testing[i].body();
    updateLocalStorage();
  }
  graphData();
  renderChart();
}

function updateLocalStorage() {
  console.log('*** PUSHING GUEST.TESTING TO LOCALSTORAGE ***');
    var arrayString = JSON.stringify(Guest.testing);
  localStorage.setItem('votingForm', arrayString);
  console.log('new local storage', arrayString);
}

function getLocalStorage() {
  if(localStorage.length > 0){
    var storageData = localStorage.getItem('votingForm');
    console.log(storageData);
    var inputObjects = JSON.parse(storageData);
    console.log(inputObjects);
    for(var i =0; i < inputObjects.length; i++) {
      inputObjects[i] = new Guest(inputObjects[i].name,inputObjects[i].winner, inputObjects[i].mvp, inputObjects[i].teamLeftScoreGuess, inputObjects[i].teamRightScoreGuess);
    }
    Guest.testing = inputObjects;
  }
}
getLocalStorage();
for(var i = 0; i < Guest.testing.length; i++){
  console.log('local storage', Guest.testing[i]);
  Guest.testing[i].body();
}



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


  Chart.defaults.global.defaultFontColor = 'white';
  var ctx = document.getElementById('pollChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelData,
      datasets: [{
        label: 'Team',
        data: pollData,
        backgroundColor: ['rgba(199, 56, 69, 78)','rgba(239, 184, 52, 94)']
        //backgroundColor: ['red', 'yellow']
      }]
    },
    options: {
      legend: {
        labels:{
          fontColor: '#fff'
        }
},
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  //   chartOptions =  { 
  //     responsive: true, 
  //     maintainAspectRatio: false, 
  //     fontColor: 'red',
  //     options:{
  //         legend:{
  //             labels:{
  //                 fontColor:'white';//change the color
  //             }
  //         }
  //     }
  // };
  });
}

renderChart();