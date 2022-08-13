const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    city: String,
    moniker: String,
    logo: String,
    division: String,
    league: String,
    activeRoster: [],
    fortyManRoster: [],
})

const Team = mongoose.model('Team', TeamSchema)
module.exports = Team