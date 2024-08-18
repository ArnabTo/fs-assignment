import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [],
    searchQuery: '',
    filturedCards: [],
};

const cardSlice = createSlice({
    name: "helpCards",
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards = action.payload;
        },

        searchQuery: (status, action) => {
            status.searchQuery = action.payload
        },

        filturedCards: (state, action) => {
            state.filturedCards = action.payload;
        }
    }
});

export const { addCard, searchQuery, filturedCards } = cardSlice.actions;
export default cardSlice.reducer;