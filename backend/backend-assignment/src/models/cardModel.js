const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
 id: {
    type: String,
    required: true
 },
 title: {
    type: String,
    required: true
 },
 description: {
    type: String,
    required: true
 }
},{
   collection: 'cardCollection'
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;

