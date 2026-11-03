const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to SyncSpace API!");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB(); // Ensure the database connection is established before starting the server
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
};
startServer();