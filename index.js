const express = require("express");

const app = express();


const PORT = process.env.PORT || 5001;

app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => res.render("pages/startpage"));

app.listen(PORT, () => console.log(`Server läuft auf http://localhost:5001`));