import axios from "axios";
import { useEffect, useState } from "react";
import ReviewModel from "../../models/ReviewModel";
import StarRating from "../../common/StarRating/StarRating";
import Card from "../../common/Card/Card";

const ReviewWrapper = () => {

    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const [ isHttpError, setIsHttpError] = useState<{msg: string}>({msg: ''});

   useEffect(() => {
    axios(
        {
            url: 'http://localhost:8080/api/reviews/search/findByBookId?bookId=1',
            method: 'get',
            responseType: 'json'
        }
    ).then((res) => {
       
        const { _embedded } = res?.data;
        if(_embedded.reviews) {
            // // console.log('res review',_embedded.reviews)
            const newReviews: ReviewModel[] = [];

            for(let review of _embedded.reviews){
              
                // // console.log('key', review.userEmail);
                const newReview: ReviewModel = {
                    id: review.id,
                    bookId: review.bookId,
                    date: review.date,
                    rating: review.rating,
                    reviewDescription: review.reviewDescription,
                    user_Email: review.userEmail

                };
                newReviews.push(newReview)
            }

            
            setReviews(newReviews)

        }else {
            //throw error
        }
    }).catch(
        (err) => {
            // console.log('err',err);
        }
    )
   },[])

    return (
        <div className="w-80% flex flex-row justify-around border-2  ml-6 mt-6 mr-6   container mb-6">
           {
            reviews.map((review) => {
                return (
                    <div key={review.bookId}>
                        <StarRating  rating={review.rating}/>


                        <Card 
                        title={review.date}
                        description={review.reviewDescription}
                        author={review.user_Email}
                        ></Card>
                        <p>rating: {review.rating}</p>
                        <p>bookId: {review.bookId}</p>
                        <p>user_Email: {review.user_Email}</p>
                        </div>
                )
            })
           }
       </div>
    )
};

export default ReviewWrapper;