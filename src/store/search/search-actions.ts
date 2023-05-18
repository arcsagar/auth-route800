import BookModel from "../../models/BookModel"
import { setIsHttpError, setIsLoading } from "../page-store"
import { setSearchBooks } from "./search-store"


export const getAllSearchBooks = (url: string) => {
    return async (dispatch: any) => {
        dispatch(setIsLoading(true))
   
        const fetchData = async () => {
            const allSearchBook: any = await   fetch(url);
      
      const booksData = await allSearchBook.json();
      
      // console.log('booksData',booksData)
      
      
      const { _embedded, page } = booksData;
        const allBooks: BookModel[] = [];
        for (let book of _embedded.books) {
          allBooks.push(book);
        }
        return allBooks;
        }
        
        try {
            const allBooks = await fetchData();
            dispatch(setIsLoading(false))
            dispatch(setSearchBooks({books: allBooks}))
        } catch (error: any) {
            dispatch(setIsLoading(false))
            dispatch(setIsHttpError(error.message))
            // console.log('error //////',error)
        }
       

    }
}


// const getAllSerachBook = async(url: string) => {
//     const allSearchBook: any = await   fetch(url) .catch((err) => {
//              // console.log("err", err);
//            //   setHttpError({ err: err.message });
//            });
   
//    const booksData = await allSearchBook.json();
   
//    // console.log('booksData',booksData)
   
   
//    const { _embedded, page } = booksData;
//      const allBooks: BookModel[] = [];
//      for (let book of _embedded.books) {
//        allBooks.push(book);
//      }
//    return allBooks;
//    // old code
//    // setIsLoading(false);
     
//    // if (res.status === 200) {
//    //   // console.log("res", res.data);
   
//      // number: 0;
//      // size: 20;
//      // totalElements: 22;
//      // totalPages: 2;
   
//    //   
//    //   setBooks(allBooks);
//    //   setCurrentPage(page.number);
//    //   setCurrentBooksSize(page.size);
//    //   setCurrentTotalbooks(page.totalElements);
//    //   setTotalPages(page.totalPages);
//    // } else {
//    //   setHttpError({ err: "test" });
//    // } 
//    // old code
   
//    }