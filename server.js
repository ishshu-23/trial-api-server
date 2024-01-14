const express = require("express");
const app = express();
app.get("/test", (req, res) => {
  res.send("<h1>It's working 🤗</h1>")
})

app.get("/", async (req, res) => {
  try {
    const id = await randomId()
    const character = await getCharacter(id)
    res.send(character)
  } catch (error) {
    res.send(error)
  }
})

app.get("/hello", (req, res) => {
    res.send("Hello from server");
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
