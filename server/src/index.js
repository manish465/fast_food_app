const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

app.use(json());
app.use(cors());
app.use("/images", express.static("images"));

const authRouter = require("./router/auth");
const itemRouter = require("./router/item");

app.get("/", (_req, res) => {
    res.send("Welcome To Fast Food Delivery Service");
});

app.use("/api/users", authRouter);
app.use("/api/item", itemRouter);

mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err) => {
        err
            ? console.log("Something went wrong")
            : app.listen(port, () => console.log("Connected to db"));
    },
);
