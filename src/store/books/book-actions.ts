import { BASEURL, BOOKS } from "../../common/ApiPath";
import BookModel from "../../models/BookModel"
import { setIsLoading } from "../page-store";
import { setIsHttpError } from "../page-store";
import { setBook } from "./book-store"

export const getBookData = (bookId: any) => {
    return async (dispatch: any) => {
          try {
            const bookData = await callgetAPI(`${BASEURL}/${BOOKS}/${bookId}`);
            dispatch(setBook(bookData))
            setPageLoadingAndHttpError(dispatch, false, null)
          } catch (error: any) {
            setPageLoadingAndHttpError(dispatch,false,error.message)
          }
    }
}


// const btCheckout = docuemnt.getElembYiD( ) 
// getBookData(2)


// is view have id 2




export const setPageLoadingAndHttpError =(dispatch: any, loadingState: boolean, msg: string| null) => {
    dispatch(setIsLoading(loadingState));
    if(msg){
        dispatch(setIsHttpError(msg))
    }
  
}

export const callgetAPI = async (url: string) => {
    const bookRes = await fetch(url);
   return await bookRes.json();
}