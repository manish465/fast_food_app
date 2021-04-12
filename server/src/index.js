const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(port, () =>
    mongoose.connect(
        process.env.DB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
            err
                ? console.log("Something went wrong")
                : console.log("Connected to db");
        },
    ),
);
