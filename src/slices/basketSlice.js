import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const newitems=state.items
      const index = newitems.findIndex( item => item.id===action.payload.id)
      if(index >= 0 ){ 
        newitems.splice(index,1);
      }
      state.items = newitems;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total,item) => total + item.price ,0);

export default basketSlice.reducer;
