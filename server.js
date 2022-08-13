const express = require("express");
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());

const Team = require("./models/TeamSchema.js")

//==========================================================================

// <---- HOME ---->
app.get('/', (req, res)=>{
	res.send("yanks-22");
});

// CREATE
app.post('/teams', (req, res)=>{
    Todos.create(req.body, (err, createdTeam)=>{
        res.json(createdTeam); //.json() will send proper headers in response so client knows it's json coming back
    });
});

// INDEX
app.get("/teams", (req, res)=>{
	Team.find({}, (err, teamsData)=>{
		res.json(teamsData)
	})
})

// <-------- SHOW -------->
app.get("/teams/:id", (req, res)=>{
	Team.findById(req.params.id, (err, teamData)=>{
		res.json(teamData)
	})
})

// <-------- DELETE -------->
app.delete('/teams/:id', (req, res)=>{
    Team.findByIdAndRemove(req.params.id, (err, deletedTeam)=>{
        res.json(deletedTeam);
    });
});

// <-------- UPDATE -------->
app.put('/teams/:id', (req, res)=>{
    Team.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTeam)=>{
        res.json(updatedTeam);
    });
});

//===============================================================================

app.listen(2727, ()=> {
	console.log("listening on port 2727...")
});

mongoose.connect('mongodb://localhost:27017/yanks22', () => {
  console.log('The connection with mongod is established')
})