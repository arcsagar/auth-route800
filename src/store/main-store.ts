import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./books/book-store";
import pageSlice from "./page-store";
import searchSlice from "./search/search-store";
import checkOutSlice from "./checkout/checkout-store";

const mainStore = configureStore({
    reducer: { 
        bookStore : bookSlice.reducer,
        pageStore: pageSlice.reducer,
        searchStore: searchSlice.reducer,
        checkOutStore: checkOutSlice.reducer
    },
});

export default mainStore;