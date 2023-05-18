import { createSlice } from "@reduxjs/toolkit";


const checkOutSlice = createSlice({
    name: 'checkoutStore',
    initialState: {
        checkOutStatus: {
            bookId: 0,
            status: false
        },
        userCheckoutBook: {
            number: 0
        }
    },
    reducers: {
        IsCheckOut: (state, action) => {
           state.checkOutStatus = action.payload;
        },
        userTotalCheckout: (state,action) => {
            state.userCheckoutBook = action.payload
        }
      
    }
});

export const { IsCheckOut, userTotalCheckout } = checkOutSlice.actions;
export default checkOutSlice;