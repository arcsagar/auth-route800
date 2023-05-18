import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: 'pageStore',
    initialState: {
        isLoading: false,
        isHttpError: {status: false, msg: ''}
    },
    reducers: {
        setIsLoading(state,action) {
            state.isLoading = action.payload;
        },
        setIsHttpError(state,action){
            state.isHttpError = action.payload;
        }
    }
});
export default pageSlice;

export const { setIsLoading, setIsHttpError } = pageSlice.actions;