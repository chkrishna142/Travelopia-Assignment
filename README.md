# Traveltopia Travel Form

A form for travellers to request a trip via.

# Getting Started

To develop the application locally, follow the following steps:

1.Install all dependencies.

Open your command-line interface (such as Terminal or Command Prompt.
Navigate to the root directory of your React app.
Run the following command to initialize a new package.json file if you haven't already done so:

`npm init -y`

2.Start a MongoDB database server and acquire the connection string.

You can use MongoDB Atlas or start a local instance via a local installation of MongoDB. Make sure to whitelist your IP address while using Atlas.

3.Create a .env file in the back-end and add your MongoDB server connection string to it.

# Inside /travelopia-backend

(enter your connection string below)

`MONGO_URL`=mongodb+srv://<name>:<password>@cluster0.bozwxph.mongodb.net/travelForm

4.start the back-end development server.

# Inside /travelopia-backend-

`npm run dev`

The back-end server is available at http://localhost:5001

# Inside /travelopia-frontend

5.Apply your back-end server to travelopia-frontend

Inside `.env` create this:

`REACT_APP_SERVER_URL= http://localhost:5001`

Now your frontend is connected with backend

6.Start the front-end development server.

# Inside /front-end

`npm run start`
