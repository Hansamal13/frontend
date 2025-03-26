//pass= p189cmBDBfsXPqoj

const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./Routes/UserRoute");
const workshopRoutes = require('./Routes/workshopRoutes');

const app = express();
const cors = require("cors");
/*const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));*/


//Middleware
app.use(express.json());
app.use(cors());

app.use("/users",UserRoute);
app.use("/workshops", workshopRoutes);

mongoose.connect("mongodb+srv://admin:p189cmBDBfsXPqoj@cluster0.aja2e.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));



