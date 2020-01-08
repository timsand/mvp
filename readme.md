TextAdventure
TextAdventure is a text adventure game where you play as a lowly goblin trying to escape from his oafish human masters.

In Action
TODO

User Stories
-Create a player object with health/name
*Make that player have an inventory
*Additional player features
-Five rooms, when user reaches the last room the game is over
\*Add directions for the rooms, rooms can split
-Save feature with back-end tech
-Launch game asking for name

Front-End
React/Redux

Back-End
Express
If time permits, Mongo for saving

Deployment
Out of Scope

Get started
Take the following steps to run the app in your localhost, you will need to have the following:

A MongoDB Atlas cluster must be set up, and the appropriate cluster URI and password must be added to the db/config.js file.
From terminal in the index folder:

npm install
npm start
Challenges
For this project, I wanted to learn React Bootstrap. React Bootstrap was fairly straight-forward, however I did end up having to introduce React Hooks to provide some features.
Learnings
React Hooks were necessary for being able to control two separate modals from one React component. This was my first exposure to React Hooks, however I found them to be extremely useful and relatively easy to implement.
Contributors
John Connolly
