const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlayerSchema = new Schema({
    name: {tpye:String,required:true},
    position:{type:String,required:true},
    oPS:Number,
    wRCPlus:Number,
    wAR:Number,
    oPSPlus:Number,
})

const Player = mongoose.model('Player', PlayerSchema)
module.exports = Player