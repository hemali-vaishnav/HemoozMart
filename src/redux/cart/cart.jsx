import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialCart = {
    items: JSON.parse(localStorage.getItem("items")) || [],
    count: parseInt(localStorage.getItem("count")) || 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCart,
    reducers: {
        addCart: (state, action) => {
            const data = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === data.id);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
            } else {
                state.items.push({ ...data, quantity: 1 });
                state.count++;
                toast.success(`Added to cart`);
            }
            localStorage.setItem("count", state.count);
            localStorage.setItem("items", JSON.stringify(state.items));
        },

        removeFromCart: (state, action) => {
            const removedItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (removedItemIndex !== -1) {
                state.items.splice(removedItemIndex, 1);
                state.count -= 1;
                localStorage.setItem("count", state.count.toString()); 
                localStorage.setItem("items", JSON.stringify(state.items));
            }
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity += 1;
                localStorage.setItem("items", JSON.stringify(state.items));
            }
        },

        decreaseQuantity: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                if (state.items[itemIndex].quantity > 1) {
                    state.items[itemIndex].quantity -= 1;
                } else {
                    state.items.splice(itemIndex, 1);
                    state.count -= 1;
                }
                localStorage.setItem("count", state.count.toString());
                localStorage.setItem("items", JSON.stringify(state.items));
            }
        },
    },
})

export const { addCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
