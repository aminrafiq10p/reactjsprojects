const path = require("path");
const express = require("express");
const cors = require("cors");

const sequelize = require("./utils/database");

const PORT = process.env.PORT || 4000;

const authRoutes = require("./routes/auth");

const app = express();

/*
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, UPDATE, DELETE');
    res.setHeader('Access-Control-Headers', 'Content-Type', 'Authorization');
    next();
});
*/
app.use(cors({ origin: '*', method: 'POST' }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);

//sequelize.sync().then(() => {
app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
});
//});
