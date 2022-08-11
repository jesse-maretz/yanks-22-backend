const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const rosterSchema = new Schema({
//     fortyMan : { type: Array, required: true },
    
// })

const teamSchema = new Schema({
    teamCity: {type: String, required: true},
    teamMoniker: {type: String, required: true},
    established: {type: String, required: true},
    division: {type: String, required: true},
})

const Team = mongoose.model('Team', teamSchema)
module.exports = Team