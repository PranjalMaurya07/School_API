// Requirements
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();


// Imports
const {mysqlPool} = require('./dbConfig/connection');
const schoolRoute = require("./routes/schoolRoute");


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api", schoolRoute);

// Setting server and databases
const port = process.env.PORT || 8001;
mysqlPool?.query('SELECT 1').then(() => {
    console.log('Db connected');
    app.listen(port, () => {
        console.log(`Server running in development mode on port ${port}`);
      });
}).catch((err) => {
    console.log(err);
})

