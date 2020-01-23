const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// MongoDB URI
const db = require("./config/keys").mongoURI;

// connect to the database
mongoose
	.connect(db)
	.then(() => console.log("MongoDB Connected Successfully..."))
	.catch(err => console.log(err));

// Use routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
