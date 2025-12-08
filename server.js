require('dotenv').config();
const express = require("express");
const connectDB = require('./config/db');
const cors =  require('cors');
// const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/",(req,res)=> {
    res.send("Backend Working");
});

const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointments');
const doctorRoutes = require('./routes/doctors');
const departmentRoutes = require('./routes/departments');

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/departments", departmentRoutes);

app.listen(5000,() => {
    console.log("Server running on port 5000");
});