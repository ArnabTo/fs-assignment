const express = require('express');
const { getCards, addCards, searchCards } = require('../controllers/cardController');
const router = express.Router();


// route for fetching all cards
router.get('/', getCards);

// route for adding a new card
router.post('/', addCards);

// route for searching a card by title
router.get('/:title', searchCards);

module.exports = router;
