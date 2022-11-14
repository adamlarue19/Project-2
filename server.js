const express = require("express");

const sequelize = require("./config/connection");

const Fish = require("./models/fish");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log("Now listening!"))
});