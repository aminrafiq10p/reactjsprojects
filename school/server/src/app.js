const path = require("path");
const express = require("express");
const cors = require("cors");

const port = 4000;

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);

app.listen(port);
