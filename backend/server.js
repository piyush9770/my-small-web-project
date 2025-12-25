const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Attendance = require("./models/Attendance");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/attendanceDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.post("/attendance", async (req, res) => {
  const { studentId } = req.body;

  const data = new Attendance({
    studentId,
    date: new Date(),
    status: "Present"
  });

  await data.save();
  res.send("Attendance Marked ✅");
});

app.listen(3000, ()=>{
  console.log("Server running on port 3000");
});
 