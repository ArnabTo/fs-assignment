const Card = require('../models/cardModel');


const getCards = async (req, res) => {
    try {
        const allCards = await Card.find();
        if (!allCards) {
            res.status(404).json({ success: false, message: 'No cards found' });
        }
        // console.log(allCards)
        res.status(200).json({
            success: true,
            message: 'Cards fetched successfully!',
            data: allCards
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const addCards = async (req, res) => {
    const { title, description } = req.body;

    try {
        const newCard = await Card.create({ title, description });
        if (!newCard) {
            res.status(400).json({ message: 'Invalid data' });
        }
        res.status(201).json({
            success: true,
            message: 'Card created successfully!',
            data: newCard
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { getCards, addCards };