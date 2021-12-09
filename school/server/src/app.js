const path = require("path");
const express = require("express");
const cors = require("cors");

const sequelize = require("./utils/database");

const PORT = process.env.PORT || 4000;

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on: http://localhost:${PORT}`);
    });
});
