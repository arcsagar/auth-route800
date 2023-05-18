import { createSlice } from "@reduxjs/toolkit";
import BookModel from "../../models/BookModel";



const iniSearchBooks: {
    searchBooks: BookModel[] | any
} = {
    searchBooks: []
}

const searchSlice = createSlice({
    name: 'searchStore',
    initialState: iniSearchBooks,
    reducers: {
        setSearchBooks: (state, action) => {
          state.searchBooks =  action.payload.books
        }
    }
});



export default searchSlice;
export const { setSearchBooks } = searchSlice.actions;