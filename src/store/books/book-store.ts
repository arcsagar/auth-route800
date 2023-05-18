

import { createSlice } from '@reduxjs/toolkit';
import BookModel from '../../models/BookModel';

type initType = {
    books:BookModel[],
    book: BookModel
}

const intState: initType = {
   books: [],
   book: {
    id: 0,
    title: '',
   }
}
const bookSlice = createSlice({
    name: 'bookStore',
    initialState: intState,
    reducers: {
       fetchAllBooks: (state: any,action:{payload: BookModel[]}) =>  {
        state.books = action.payload
       },
       setBook: (state, action) => {
        state.book = action.payload
       }  
    }
})



export const { fetchAllBooks, setBook }  = bookSlice.actions;



export default bookSlice;