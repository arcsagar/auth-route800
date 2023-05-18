import { BASEURL, BOOKS } from "../../common/ApiPath";
import { setIsHttpError } from "../page-store";
import { setIsLoading } from "../page-store";
import { IsCheckOut, userTotalCheckout } from "./checkout-store";

export const isCheckout= (bookId:any, token: any) => {
    return async(dispatch:any) => {
        try {
            const url = `${BASEURL}/${BOOKS}/secure/ischeckedout/byuser?bookId=${bookId}`
            const isCheckoutResponse = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${token}`
                  },
            });


            const bookStatus = await isCheckoutResponse.json();
            // console.log('bookstatus',bookStatus)
            dispatch(IsCheckOut({bookId,status: bookStatus}))

        } catch (error) {
            // console.log('errpr',error)
        }
    }
};

export const checkoutBook = (bookId:any, token: any) => {

    return async (dispatch: any) => {
       try {
        dispatch(setIsLoading(true));
        const checkoutResponse = await fetch(`${BASEURL}/${BOOKS}/secure/checkout?bookId=${bookId}`,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
    });

    const checkoutData: any = await checkoutResponse.json();
    // console.log('checkOut data res',checkoutData);
    if(checkoutData.status === 500){
        dispatch(setIsHttpError({status: true, msg:checkoutData.message}))
    }

    dispatch(IsCheckOut({bookId: checkoutData.id, status: true }))
    dispatch(setIsLoading(false));
       } catch (error:any) {
        // console.log('checkOut data error',error);
        dispatch(setIsLoading(false));
        dispatch(setIsHttpError({msg:error.message}))
       }


    }
}

export const userTotalCheckoutBooks= (token: any) => {
    return async(dispatch:any) => {
        try {
            const url = `${BASEURL}/${BOOKS}/secure/currentloans/count`;
            const totalCheckoutBookResponse = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${token}`
                  },
            });


            const totalBooksNumber = await totalCheckoutBookResponse.json();
            // console.log('totalBooksNumber',totalBooksNumber)
            dispatch(userTotalCheckout({number: totalBooksNumber}))

        } catch (error) {
            // console.log('errpr',error)
        }
    }
};


