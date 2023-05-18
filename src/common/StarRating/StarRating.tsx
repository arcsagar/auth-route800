import { useEffect, useState } from "react";

const StarRating:React.FC<{rating: number}> = (props) => {
    const {rating} = props;

    const nonStar = 5 - rating;

    const [nonStarArr,setnonStarArr]= useState([]);
    const [starArr,setstarArr]= useState([]);


    const createNonStartArr = () => {
        const tempArr: any = []
        for (let index = 1; index <= nonStar; index++) {
            const nonStarElm = (
                <li>
                      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="mr-1 h-5 w-5 text-warning">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  
  </li>
            )
            
            tempArr.push(nonStarElm)
        }

        setnonStarArr(tempArr);
    }

    const createStartArr = () => {
        const tempArr: any = [];
        for (let index = 1; index <= rating; index++) {
            const startElm = (
                <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="gold"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="mr-1 h-5 w-5 text-warning">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  </li>
            )
            
            tempArr.push(startElm)
        }

        setstarArr(tempArr);
    }

   useEffect(() => {
    createNonStartArr();
    createStartArr();



   }, [])

   useEffect(() => {
    // // console.log('starArr',starArr)
    // // console.log('nonStarArr',nonStarArr)
   }, [nonStarArr,starArr]);

    return (
        <ul className="flex justify-center">

 
 {starArr}
{nonStarArr}

</ul>
    )
}

export default StarRating;