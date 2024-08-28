import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static("public"));
const port = 3000;


app.listen(port , () => {
    console.log(`Server listening on port http://localost:${port}`);
});

app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/projects" , (req , res) => {
    res.sendFile(__dirname + "/public/projects.html");
});

app.get("/index" , (req , res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/contacts" , (req , res) => {
    res.sendFile(__dirname + "/public/contacts.html");
});

app.get("/about-me" , (req , res) => {
    res.sendFile(__dirname + "/public/about-me.html");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});