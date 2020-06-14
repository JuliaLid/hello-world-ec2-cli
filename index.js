/**
 * Required External Modules
 */

 const express = require("express");
 const path = require("path");
 let getRandomNumber = () => {
    return JSON.stringify(Math.floor(Math.random() * (500 - 2)));
 }



/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "5000";

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */
app.get("/api/randomnumber", (req, res) => {
    res.status(200).send(`Your lucky number is ${getRandomNumber()}!`);
  });
/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });