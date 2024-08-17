const express = require('express');
const { getCards, addCards } = require('../controllers/cardController');
const router = express.Router();


// Route for fetching all cards
router.get('/', getCards);

// Route for adding a new card
router.post('/', addCards);
// route.get('/:title', searchCards);

module.exports = router;
