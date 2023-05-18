import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL, BOOKS } from "../../common/ApiPath";
import BookModel from "../../models/BookModel";
import op1 from '../../images/carousal/op1.jpg';
import { getBookData } from "../../store/books/book-actions";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../store/page-store";
import { checkoutBook, isCheckout } from "../../store/checkout/checkout-action";

import { useOktaAuth } from '@okta/okta-react'
import Button from "../../common/Button/Button";
const BookInfo = () => {
  const dispatch = useDispatch<any>();

  const {isHttpError} = useSelector((redux: any) => redux.pageStore);
  const bookStoreData = useSelector((redux: any) => redux.bookStore)

  const { book } = bookStoreData;

  const {checkOutStatus} = useSelector((redux: any) => redux.checkOutStore);

  const isCheckoutMsg = checkOutStatus.status && <div> This book Is already Checked Out</div>

  const bookId = document.URL.split("book/")[1];
    
  const {oktaAuth, authState} = useOktaAuth();


  useEffect(() => {
    // getBookDatatemp();
    dispatch(setIsLoading(true))
   dispatch( getBookData(bookId))
   if(authState?.isAuthenticated){
    dispatch(isCheckout(bookId,authState?.accessToken?.accessToken))
   }

  }, []);

  const ErrorPage = (
    <div>
      <span> {isHttpError.status && isHttpError.msg} </span>
    </div>
  );



  const bookData = (
    <div className="w-80% flex flex-row justify-around border-2  ml-6 mt-6 mr-6   container ">
      <div className="left basis-1/3">
        <h1>Book title : {book?.title} </h1>
        <h1>Book author : {book?.author} </h1>
 
        <h1>Book category : {book?.category} </h1>
        <p> {book?.description} </p>
      </div>
      <div className="right basis-1/3">
        <img className="w-350 h-96" src={book?.img} alt={book?.title} />
        <h1> {book?.copies} / {book?.copiesAvailable}  </h1>
        <Button 
        btName="checkout"
        btClass={checkOutStatus.status && ' bg-slate-400 hover:border-gray-400 disabled:opacity-75 appearance-none'}
        btDisabled={checkOutStatus.status}
        btFunc={() => {
          dispatch(checkoutBook(bookId,authState?.accessToken?.accessToken))
        }}></Button>
      </div>
    </div>
  );

  return (
    <div>
      {isCheckoutMsg}
      {(isHttpError.status  || !book) && ErrorPage}

      {!isHttpError.status  && book && bookData}
    </div>
  );
};

export default BookInfo;
