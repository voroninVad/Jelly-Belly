import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Stars from "../../components/Stars";
import style from "./index.module.css";
import ReviewCard from "../../components/ReviewCard";

type FormType = {
  id: number;
  name: string;
  comment: string;
  stars: number;
};

const Review = () => {
  const [rating, setRating] = useState(1);

  const { register, handleSubmit, reset} = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    data.stars = rating;
    try {
      const response = await fetch(
        "https://52ce96b958af4533.mokky.dev/reviews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      reset()
      setRating(0)
    } catch (error: unknown) {
      if(error instanceof Error){
        console.error("Error fetching:", error.message);
      } else {
        console.error("Error fetching: Unknown error"); 
      }
    }
  };

  return (
    <>
      <form
        className={style.form}
        action=""
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>Leave your feedback</h4>
        <label htmlFor="">
          Name<br/>
          <input type="text"  {...register("name", { required: true })} id="" />
        </label>
        Stars:
        <Stars setRating={setRating} />
        Comment
        <textarea  {...register("comment", { required: true })} rows={300} cols={50}></textarea>
        <button type="submit">Send</button>
        <input type="submit" value="send" />
      </form>
      <ReviewCard />
    </>
  );
};

export default Review;