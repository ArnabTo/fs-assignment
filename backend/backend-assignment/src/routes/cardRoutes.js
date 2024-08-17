const express = require('express');
const { route } = require('../app');

const router = express.Router();

router.get('/', getCards);
router.post('/', addCards);
route.get('/:title', searchCards);

module.exports = router;
