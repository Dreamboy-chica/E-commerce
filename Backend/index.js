let express = require("express");
let app = express();
let mongoose = require("mongoose");
let cors = require("cors");
let port = 1234;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
let route = require('./Routes/userroute');
let proute = require('./Routes/prodroute');

// MongoDB Connection
mongoose.connect("mongodb+srv://ravi:qrPIz4Fb7bfJj1O9@cluster0.2bhnv.mongodb.net/Ecommerce").then(() => {
    console.log("Database has been connected");
}).catch(err => {
    console.error("Database connection error:", err);
});

// Use Routes
app.use("/", route);
app.use("/", proute);

// Start the server
app.listen(port, () => {
    console.log(`Server has started on Port ${port}`);
});
