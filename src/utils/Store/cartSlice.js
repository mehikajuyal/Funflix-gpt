import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here (i.e we are modifying the existing state)
            // Redux toolkit uses immer(library to convert mutable to non mutable) behind the scenes.
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // RTK - Either mutate the existing state or return a new state
            // 1. state.items.length = 0;

            // 2.
            return { items: [] }; // This new [] will be replaced inside original state {items: []}.
        }

    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;