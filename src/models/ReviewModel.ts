class ReviewModel {
    bookId: number;
    date: string;
    id: number;
    rating: number;
    reviewDescription: string;
    user_Email: string;

    constructor(
        bookId: number,
        date: string,
        id: number,
        rating: number,
        reviewDescription: string,
        user_Email: string
    ) {
        this.bookId = bookId;
        this.date = date;
        this.id = id;
        this.rating = rating;
        this.reviewDescription = reviewDescription;
        this.user_Email = user_Email;
    }
};

export default ReviewModel;