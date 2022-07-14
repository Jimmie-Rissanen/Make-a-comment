To use this app you will need to have postgres and node on you local machine. 

Go ahead and create a database, with a user and a password in postgres. Make sure that postgres is up and running. Go to App/example.env and fill out your credentials. Rename the file to just ".env". Use the specified port 5000 if you can. 

Cd into the App folder and run npm install. When done run npm start. Your server will now be running on your specified port. 

Cd into the ui folder and run npm install. If you changed the backend port to anything else, move to  ui/src/utils.js and change the PORT variable. Then run npm start and your ui will open in the browser. 

