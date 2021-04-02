const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const infoSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    phone: { type: Number, required: true},
    date: { type: String, required: true},
    time: { type: String, required: true}

}, { timestamps: true})
// Timestamps will add when user reserved like created at 

module.exports = mongoose.model('Info', infoSchema)