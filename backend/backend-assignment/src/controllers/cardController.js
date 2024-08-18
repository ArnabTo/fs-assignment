const Card = require('../models/cardModel');


const getCards = async (req, res) => {
    try {
        const allCards = await Card.find();
        if (!allCards) {
            return res.status(404).json({ success: false, message: 'No cards found' });
        }
        // console.log(allCards)
        res.status(200).json({
            success: true,
            message: 'Cards fetched successfully!',
            data: allCards
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const addCards = async (req, res) => {
    const { title, description, link } = req.body;

    try {

        if (!title || !description) {
            return res.status(400).json({ success: false, message: 'Title and description are required' });
        }
        const newCard = await Card.create({ title, description, link });
        if (!newCard) {
            res.status(400).json({ message: 'Invalid data' });
        }
        return res.status(201).json({
            success: true,
            message: 'Card created successfully!',
            data: newCard
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}


const searchCards = async (req, res) => {

    const { title } = req.params;

    console.log(title)
    try {
        const findCard = await Card.findOne({ title: { $regex: title, $options: 'i' } });
        if (!findCard) {
            return res.status(404).json({ success: false, message: 'Card not found' });
        }

        return res.status(200).json({
            success: true,
            message: 'Card found successfully!',
            data: findCard
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}


module.exports = { getCards, addCards, searchCards };