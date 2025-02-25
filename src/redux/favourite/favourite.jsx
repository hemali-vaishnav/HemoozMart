import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialFavourite = {
    favItems: JSON.parse(localStorage.getItem("favItems")) || [],
    favCount: parseInt(localStorage.getItem("favCount")) || 0,
};


export const favouriteSlice = createSlice({
    name: "favourite",
    initialState: initialFavourite,
    reducers: {
        addFavCart: (state, action) => {
            state.favCount++;
            state.favItems.push(action.payload)
            localStorage.setItem("favCount", state.favCount)
            localStorage.setItem("favItems", JSON.stringify(state.favItems))
            toast.success(`Added to favorites`);

        },
        removeFromFav: (state, action) => {
            const removedItemIndex = state.favItems.findIndex(item => item.id === action.payload.id);
            if (removedItemIndex !== -1) {
                state.favItems.splice(removedItemIndex, 1);
                state.favCount -= 1;
                localStorage.setItem("favCount", state.favCount.toString());
                localStorage.setItem("favItems", JSON.stringify(state.favItems));
                toast.success(`remove from favorites`);

            }
        }
    }
})

export const { addFavCart, removeFromFav } = favouriteSlice.actions;
export default favouriteSlice.reducer