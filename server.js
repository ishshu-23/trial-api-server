const express = require("express");
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
app.get("/hello", (req, res) => {
    res.send("Hello from server");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening to Port ${PORT}`);
});
