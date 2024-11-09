import { useEffect, useState } from "react";
import style from "./index.module.css";

type dataUser ={
    id:number,
    name:string,
    comment: string,
    stars:number
}

const ReviwCard = () => {
  const [revies, setReview] = useState<dataUser[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://52ce96b958af4533.mokky.dev/reviews"
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }

        setReview(data);
      } catch (error: unknown) {
        if(error instanceof Error){
          console.error("Error fetching:", error.message);
        } else {
          console.error("Error fetching: Unknown error"); 
        }
      }
    };

    fetchData();
  }, []);
  return (
    <div className={style.reveiws__container}>
      <h1>Reviews ...</h1>
      <div className={style.reveiws}>
        {revies.map((item, index) => (
          <div key={index} className={style.review}>
            <h3>{item.name}</h3>
            {item.stars && <div>{"⭐".repeat(item.stars)}</div>}
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviwCard;
