'use strict';

//Global Variables


//Constructor Function to populate team image and stats
function Team (img, teamName, teamRecord, ptsPerGame, ptsAllowedPerGame, avgYardsPerGame, avgYardsAllowedPerGame){
    this.img = img; 
    this.teamName = teamName; 
    this.teamRecord = teamRecord; 
    this.ptsPerGame = ptsPerGame;
    this.ptsAllowedPerGame = ptsAllowedPerGame;
    this.avgYardsPerGame = avgYardsPerGame;
    this.avgyardsAllowedPerGame = avgYardsAllowedPerGame;
    
    
}

//Instantations to populate team images and stats
new Team(img, 'Forty Nine', '13W, 3L', 29.9, 18.9, 331, 304.8);
new Team(img, 'Chief', '12W, 4L', 43.0, 20.2, 422.5, 402.0);

function renderTeam(){
    //function to write info from constructor function to the HTML page


}

//Now we make a second constructor function to gather user input in a form, write the input to storage and then get the data from storage and populate the graph and table
//Constructor Function for user input
function UserVoting(userName, winner, mvp, score1, score2){
    this.userName = userName;
    this.winner = winner;
    this.mvp = mvp;
    this.score1 = score1;
    this.score2 = score2; 

    UserVoting.data.push(this);
    
}

UserVoting.data = []; 


//Event handler to handle input from form
function handleSubmit(event){
    event.preventDevfault();
    
    
    //get all values from the form
    var data = event.target;
    var userName = data.userName.value;
    var winner = data.winner.value;
    var mvp = data.mvp.value;
    var score1 = data.score1.value;
    var score2 = data.score2.value;
    
    var fortyNineVote = 0; 
    var chiefVote = 0;
    
    if(winner.value = fortyNine){
        fortyNineVote++;
    } else if (winner.value = chief){
        chiefVote++;
    } else
    alert('Unknown input');

new UserVoting(userName, winner, mvp, score1, score2);    

}



