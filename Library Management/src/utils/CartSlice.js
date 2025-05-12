import { createSlice } from "@reduxjs/toolkit";



const book1 = { id: 1, title: "Book One" };
const book2 = { id: 2, title: "Book Two" };


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [book1, book2]
    },

    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0
        }
    }
})


export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;