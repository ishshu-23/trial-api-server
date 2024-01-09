const express = require("express");
const channelRouter = require("./routes/channel.router");
const usersRouter = require("./routes/users.router");
const { iteratorLoop } = require("./controllers/match.controller.js");
const { countries } = require('./models/countries.model.js');
const { users } = require('./models/users.model.js');

const app = express();

app.get("/", (req, res) => {
    // Creating a JSON object to send as a response
    const jsonResponse = {
        message: "Server is working",
        status: "success"
    };

    // Sending the JSON response
    res.json(jsonResponse);
});


app.use("/channel", channelRouter);
app.use("/users", usersRouter);

// iteratorLoop();
// setInterval(() => { 
//     console.log("Hello World");

//     var index1 = Math.floor(Math.random() * countries.length);
//     var index2 = Math.floor(Math.random() * countries.length);
//     if (index1 === index2 || users[index1].length === 0 || users[index2].length === 0) {
//         console.log("I am inside if condition");
//     } else {
//         var user1 = users[index1].shift();
//         var userid1 = user1.userid;
//         var user2 = users[index2].shift();
//         var userid2 = user2.userid;
//         console.log("User1 id", userid1, "User2 id", userid2);
//         user1.res.send(userid1 + userid2);
//         user2.res.send(userid1 + userid2);
//     }
// }, 1000);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening to Port ${PORT}`);
});
