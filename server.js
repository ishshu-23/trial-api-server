const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("/ url is working");
});

app.get("/users", (req, res) => {
    const userData = {
        message: "users endpoint is working",
        // Include any other user-related data here
    };

    // Sending a JSON response
    res.json(userData);
});

app.get("/channels", (req, res) => {
    res.send("channels endpoint is working");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening to Port ${PORT}`);
});
