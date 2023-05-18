

import { useEffect, useState } from 'react';

import Footer from '../../Footer/Footer';
import RowCard from '../../common/Card/RowCard';
import Carousel from '../../common/Carousel/Carousel';
import MainHeader from '../main-header/MainHeader';
import axios from 'axios';
import BookModel from '../../models/BookModel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks} from '../../store/books/book-store';
import { setIsHttpError, setIsLoading } from '../../store/page-store';
import { useOktaAuth } from '@okta/okta-react'
import { checkoutBook, userTotalCheckoutBooks } from '../../store/checkout/checkout-action';
const HomePage = () => {
  const dispatch = useDispatch<any>();
    const {userCheckoutBook} = useSelector((redux:any) => redux.checkOutStore);
    // console.log('checkoutStore',userCheckoutBook)
    const {oktaAuth, authState} = useOktaAuth();

      const books: any = useSelector((store: any) => {
        // console.log('store',store);
        return  store.bookStore.books;
      })

      const { isLoading, isHttpError} = useSelector((store:any) => store.pageStore)
     
    

    

      const data = { test: 'test1'};
      const fetchBooksDataFunc = async () => {
        const resBooks: any = await fetch('http://localhost:8080/api/books',
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
                               .catch((err ) => {
                               
                                dispatch(setIsHttpError({status: true, msg: err.message}))
                               });
        dispatch(setIsLoading(false));
        if(resBooks){
          
          if(resBooks.status === 200){
            const booksData = await resBooks.json();
            
            const { _embedded } =booksData;
           
            const allBooks:BookModel[] = [];
            for(let book of _embedded.books){
              
              allBooks.push(book)
            }
            dispatch(fetchAllBooks(allBooks))

            // // console.log('booksData',booksData)
          }else {
            // console.log('test 200 error',)
          }

        }

      }

      useEffect(() => {
        // setIsLoading(true);

        dispatch(setIsHttpError({status: false, msg:''}))
        dispatch(setIsLoading(true))

        fetchBooksDataFunc()
        // console.log('authState',authState)
    if(authState?.isAuthenticated){
      dispatch(userTotalCheckoutBooks(authState?.accessToken?.accessToken))
   }
      },[])
    return (
      <>

      {isHttpError.status && <span> {isHttpError.msg} </span>}
        <MainHeader checkoutCount={ userCheckoutBook.number} />
       {isLoading  && <span> currently loading data  </span>  }
       {/* {!isLoading && <p> load main data </p>} */}
       {!isLoading && books.length > 0 && <Carousel images={books} /> }
        <RowCard />
        <Footer />
      </>
    )
}

export default HomePage;