import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: []
};

const cardSlice = createSlice({
    name: "helpCards",
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards = action.payload;
        }
    }
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;