import { Dispatch, FC, SetStateAction } from "react";
import { Rating } from 'react-simple-star-rating'

type Props ={
  setRating: Dispatch<SetStateAction<number>> 
}

const Stars:FC<Props> = ({setRating}) => {

    const handleRating = (rate: number) => {
      setRating(rate)
    }

      return (
        <Rating
        onClick={handleRating}
      />
      );
};
export default Stars;
