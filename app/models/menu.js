const mongoose = require('mongoose')
const Schema = mongoose.Schema // first letter cap then either class or const func


const menuSchema = new Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    price: { type: Number, required: true}

})
// This is just schema to convert it into model .model used
// first parameter same (but singular) as collection in db 
// second parameter schema name

module.exports = mongoose.model('Menu', menuSchema)

