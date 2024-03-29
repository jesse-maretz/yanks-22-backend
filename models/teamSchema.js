const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    city: String,
    moniker: String,
    logo: String,
    estab: Number,
    division: String,
    league: String,
    activeRoster: [PlayerSchema],
    fortyManRoster: [PlayerSchema],
})

const Team = mongoose.model('Team', TeamSchema)
module.exports = Team