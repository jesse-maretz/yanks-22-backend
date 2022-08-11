const Roster = require("./models/roster.js")

app.post("/roster", (req, res) => {
    Roster.create(req.body, (err, createdRoster) => {
        res.json(createdRoster)
    })
})