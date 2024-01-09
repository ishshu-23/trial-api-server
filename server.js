const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("/ url is working");
});
app.get("/users", (req, res) => {
    res.send("users endpoint is working");
});
app.get("/channels", (req, res) => {
    res.send("channels endpoint is working");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening to Port ${PORT}`);
})