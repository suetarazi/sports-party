# Requirements for Sports Party

Trello link: https://trello.com/b/qIJ5QTSB/sports-party-web-app 

Wireframe link: https://trello.com/c/viMnM0zP/1-wireframe 

## Project Vision:
- To create an app that can be used at a party for a football championship.
- This is an entertainment app that can be used by all members attending the party to learn about the teams, vote and see voter results of all members attending the party.
- This app has been created to strengthen relationships between individuals attending a party.

## User Stories: 
- As the admin and the host of the party, I would like to have an app available to allow for a fun way for attendees of my football championship party to interact. When they arrive at the party, the guests will visit the app on my computer. 
- The site needs to have images of each team logo and information (basic stats) available for each team so my party guests can learn about each team.
- There needs to be a form for guests to fill out that will gather their name, which team they think will win, who they think the MVP will be and what the final score will be. 
- Upon submission of the form, the guests input will be returned in a table that aggrates all the guest's votes.
- Also a bar graph will be created of which team the guest's think will win, using the aggragate data.
- As the admin, I would like to be able to update the score as the game progresses on an adamin page that only I can access. A link to an admin page should exist in the navigation.
- Provide links at the bottom of the page to external sports sites. 

## Scope In/Out:
### In:
- The web app will allow users to see each team's logo and learn general information and statistics about each team
- The web app will allow users to fill out a form in order to register and cast a vote on who they think will win, who they think the MVP will be and what they think the final score will be. 
- The site will return the guest's input into a table.
- The site will take the data from the submitted form and generate a bar graph of who the guests think will win.
### Out:
- We are only using local storage for this project, so this app will not be connected to a database.
- User data submitted in the form will not be shared outside the party.  
- This app is not scalable to iOS or Android.
- This app will not make you nachos or get you a beer. 

## Minimal Viable Product:
- Register a user for a party, collect their votes in a form and display their input in a table and chart (for winner pick). 
- Allow the admin of the site to update the score. 
- Allow users to visit external sporting sites for more information via links at the bottom of the page. 

## Stretch Goals: 
- Add some animation to the images on the page.
- Add more graphs: a pie chart for MVP data and some other graph to display score data.
- Make the page scalable so it can be used for any sports championship. The admin should be able to update the name of the championship, team images and team information (stats), MVP pull-down information. 
- Individual player stats that can be populated by the site admin that are scrollable by the end user.

## Functional Requirements: 
- The party guests can view an image of each team and read information (stats) about each team.
- The party guests can fill out a form, fill out their name and vote for the following: vote for which team will win via radio button, vote for MVP via dropdown, vote for final score via two number inputs. 
- User input will be populated in a table. A link to this table should be in the navigation. 
- A bar graph will display the vote for each team based on the guest's input.
- The admin can update the score of the game via an admin page. The link to this page should be in the navigation and the score should populate on the main page. 

## Data Flow:
- The guest arrives at the party and views the website. After seeing the teams's logo and reading the team stats, they have the opportunity to cast their vote. They will fill out their name, vote for which team they think will win, select an MVP from a pull-down, and cast their vote for final score. This information will then be returned to a table. Also the vote for the winning team will be presented in a bar graph. 
- The admin of the site (party host) will be able to be the only one to access the admin page in order to update the score. The score will populate on the main page. 