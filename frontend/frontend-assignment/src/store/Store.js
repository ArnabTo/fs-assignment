import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/CardSlice";

export const store = configureStore({
    reducer: {
        cards: cardSlice
    }
})

